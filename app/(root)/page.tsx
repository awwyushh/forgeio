import SearchForm from "@/app/components/SearchForm";
import StartupCard from "@/app/components/StartupCard";
import Transition from "@/app/components/StartupCardAnim";
import {client} from "@/sanity/lib/client";
import {startups_query} from "@/sanity/lib/queries"

export default async function Home({searchParams}:{
    searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query;

  const posts = await client.fetch(startups_query);

  return (
        <>
            <section className={`pink_container`}>
                <h1 className={`heading`}>
                    Pitch your Ideas, <br/>
                    Connect with Ideators<span className={`text-emerald-100`}>.</span>
                </h1>
                <p className={`sub-heading !max-w-3xl`}>
                    Submit Ideas, Get Feedback, Collaborate with other Ideators and Build your Startup.
                </p>

                <SearchForm query={query}/>
            </section>

            <section className={`section_container`}>
                <p className={`text-30-semibold`}>
                    {query ? `Search Results for "${query}"` : "Latest Ideas"}
                </p>
                <ul className={`mt-7 card_grid`}>
                        {posts?.length > 0 ? (
                            posts.map((post:StartupCardType) => (
                                <Transition key={post?._id}>
                                <StartupCard key={post?._id} post={post}/>
                                </Transition>
                            ))
                        ) : (
                            <p className={`no-result`}>
                                No Ideas found.
                            </p>
                        )}
                </ul>


            </section>

        </>
      );
}
