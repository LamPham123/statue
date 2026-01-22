import { getContentDirectories, getContentByDirectory, getSubDirectories, getSidebarTree, isGalleryDirectory, getGalleryData, getContentByUrl, detectNamingConflicts } from 'statue-ssg/cms/content-processor';
import { error } from '@sveltejs/kit';

// Make this page prerendered as a static page
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // Get directory name
  const directoryName = params.directory;

  // Get all directories
  const directories = getContentDirectories();

  // Check for naming conflicts
  const conflicts = await detectNamingConflicts();
  const hasConflict = conflicts.find(c => c.name === directoryName);

  // If this directory has a naming conflict, show error page
  if (hasConflict) {
    return {
      hasNamingConflict: true,
      conflictData: hasConflict,
      directories
    };
  }

  // Check if this is an actual directory
  const isActualDirectory = directories.some(dir => dir.name === directoryName);

  if (isActualDirectory) {
    // This IS a real directory - render directory listing
    // Continue to directory handling below...
  } else {
    // NOT a directory - show the content file
    const allContent = await getContentByUrl(`/${directoryName}`);

    if (allContent) {
      console.log(`📄 Rendering content file: ${allContent.path}`);

      const sidebarItems = allContent.directory?.startsWith('docs') ? await getSidebarTree('docs') : [];
      return {
        content: allContent,
        directories,
        sidebarItems
      };
    }
  }

  // Check if this is a gallery directory
  const isGallery = isGalleryDirectory(directoryName);
  const galleryItems = isGallery ? getGalleryData(directoryName) : [];

  // Get content from specific directory (including content from subdirectories)
  const directoryContent = await getContentByDirectory(directoryName);

  // Find subdirectories of this directory
  const subDirectories = await getSubDirectories(directoryName);

  // Get directory information
  const currentDirectory = directories.find(dir => dir.name === directoryName) || {
    name: directoryName,
    title: directoryName.charAt(0).toUpperCase() + directoryName.slice(1)
  };

  // Get sidebar tree for docs directory
  const sidebarItems = directoryName === 'docs' ? await getSidebarTree(directoryName) : [];

  return {
    directories,
    directoryContent,
    subDirectories,
    currentDirectory,
    sidebarItems,
    isGallery,
    galleryItems
  };
}
