<script>
	import {
		DirectoryHeader,
		SubDirectories,
		DirectoryContent,
		DocsLayout,
		DocsDirectoryList,
		BlogLayout,
		ContentGrid,
		CaptionedGridElement,
		ContentHeader,
		ContentBody,
		BlogPostLayout
	} from 'statue-ssg';

	const { data } = $props();

	// Check if this page has a naming conflict
	const hasNamingConflict = $derived(!!data.hasNamingConflict);

	// Check if this is actually a content page (not a directory)
	const isContentPage = $derived(!!data.content);

	const isDocsDirectory = $derived(!isContentPage && data.currentDirectory?.name === 'docs');
	const isBlogDirectory = $derived(!isContentPage && data.currentDirectory?.name === 'blog');
	const isGallery = $derived(!isContentPage && data.isGallery);

	const currentDirContent = $derived(
		isContentPage ? [] : (data.directoryContent || []).filter((page) => {
			return page.directory === data.currentDirectory?.name;
		})
	);

	const subDirContent = $derived(
		isContentPage ? [] : (data.directoryContent || []).filter((page) => {
			return (
				page.directory !== data.currentDirectory?.name &&
				page.directory?.startsWith(data.currentDirectory?.name + '/')
			);
		})
	);

	const allDocsContent = $derived([...currentDirContent, ...subDirContent]);
</script>

<svelte:head>
	<title>{hasNamingConflict ? 'Configuration Error' : (isContentPage ? data.content.metadata.title : (data.currentDirectory?.title || ''))}</title>
	<meta name="description" content="{hasNamingConflict ? 'Naming conflict detected' : (isContentPage ? data.content.metadata.description : (data.currentDirectory?.title || '') + ' page - Created by Statue SSG')}" />
</svelte:head>

{#if hasNamingConflict}
	<!-- Naming conflict error page -->
	<div class="min-h-screen text-white bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)">
		<div class="container mx-auto px-4 py-16">
			<div class="max-w-3xl mx-auto">
				<div class="bg-red-900/30 border-2 border-red-600/50 rounded-lg p-8">
					<h1 class="text-3xl font-bold mb-4 text-red-200">⚠️ Configuration Error</h1>
					<p class="text-lg text-red-100 mb-6">
						Multiple items found for this path. Please check your content directory:
					</p>

					<div class="bg-black/30 p-4 rounded mb-6 font-mono text-sm">
						<div class="text-yellow-200 mb-2">Directory:</div>
						<div class="text-white ml-4 mb-4">• {data.conflictData.directory}</div>

						<div class="text-yellow-200 mb-2">Files:</div>
						{#each data.conflictData.files as file}
							<div class="text-white ml-4">• {file}</div>
						{/each}
					</div>

					<p class="text-red-100 mb-4">
						<strong>To fix this:</strong> Rename one of these items to resolve the conflict.
					</p>

					<p class="text-sm text-red-200">
						Check your terminal/console for detailed warnings about this conflict.
					</p>
				</div>
			</div>
		</div>
	</div>
{:else if isContentPage}
	<!-- This is actually a content file, not a directory - render it like [...slug] does -->
	<div
		class="min-h-screen text-white bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)"
	>
		<div class="container mx-auto px-4 py-16">
			<div class="max-w-6xl mx-auto">
				<ContentHeader
					title={data.content.metadata.title}
					date={data.content.metadata.date}
					author={data.content.metadata.author}
					backLink="/"
					backLinkText="Home"
				/>

				<ContentBody content={data.content.content} />
			</div>
		</div>
	</div>
{:else if isDocsDirectory}
	<DocsLayout
		sidebarItems={data.sidebarItems || []}
		activePath="/docs"
		sidebarTitle={data.currentDirectory.title}
		showToc={false}
		headings={[]}
	>
		<DocsDirectoryList
			title={data.currentDirectory.title}
			content={allDocsContent}
			subDirectories={data.subDirectories}
		/>
	</DocsLayout>
{:else if isBlogDirectory}
	<BlogLayout title={data.currentDirectory.title} posts={currentDirContent} />
{:else if isGallery}
	<div
		class="min-h-screen text-white bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)"
	>
		<div class="container mx-auto px-4 py-16">
			<DirectoryHeader title={data.currentDirectory.title} />

			<ContentGrid columns={3} gap="24px">
				{#each data.galleryItems as item}
					<CaptionedGridElement
						src={item.src}
						alt={item.alt}
						title={item.title}
						caption={item.caption}
					/>
				{/each}
			</ContentGrid>

			{#if currentDirContent && currentDirContent.length > 0}
				<div class="mt-16">
					<h2 class="text-2xl font-bold mb-6 text-white">Articles</h2>
					<DirectoryContent content={currentDirContent} />
				</div>
			{/if}
		</div>
	</div>
{:else}
	<div
		class="min-h-screen text-white bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)"
	>
		<div class="container mx-auto px-4 py-16">
			<DirectoryHeader title={data.currentDirectory.title} />
			<SubDirectories subDirectories={data.subDirectories} />
			<DirectoryContent content={currentDirContent} />

			{#if subDirContent && subDirContent.length > 0}
				<div>
					<h2 class="text-2xl font-bold mb-6 text-white">Contents in Subdirectories</h2>
					<DirectoryContent content={subDirContent} showDirectory={true} />
				</div>
			{/if}

			{#if !currentDirContent.length && !subDirContent.length && (!data.subDirectories || !data.subDirectories.length)}
				<DirectoryContent content={[]} emptyMessage="No content found in this directory." />
			{/if}
		</div>
	</div>
{/if}
