import SearchForm from "@/app/components/SearchForm";
import StartupCard from "@/app/components/StartupCard";
import Transition from "@/app/components/StartupCardAnim";

export default async function Home({searchParams}:{
    searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query;

  const posts = [{
      _createdAt: "2022-01-01",
      views: 100,
      author: {_id: 1, name:"Ayush"},
      _id:1,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Tech",
      title: "Gaming won't stop!",
  },
  ]



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
