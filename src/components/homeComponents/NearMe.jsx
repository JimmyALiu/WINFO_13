import React from 'react'

export default function NearMe() {
    return (
        <div>
            <div className='h-30'>
                <h1>
                    Friends Near Me
                </h1>
            </div>

            <div className='grid grid-cols-2'>
                <div>
                    sidebar
                </div>
                <div>
                    <figure class="max-w-lg">
                        <img class="h-auto max-w-full rounded-lg" src="/docs/images/examples/image-3@2x.jpg" alt="image description" />
                            <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
                    </figure>
                </div>
            </div>

        </div>
    )
}
