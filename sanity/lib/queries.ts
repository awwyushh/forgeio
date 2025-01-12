import {defineQuery} from "groq";

export const startups_query =
    defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
        _id, title, slug, _createdAt, views, description, category, image,
        author -> {
            name, _id, image, bio
        }
    }`)