import {fmtDate} from "@/lib/utils";
import {EyeIcon} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const StartupCard =
    ({post} : {post : StartupCardType}) => {

    const {_createdAt, views, author, _id, image, description, title, category} = post;

        return (
            <li className={`startup-card group`}>

                <div className={`flex-between`}>
                    <p className={`startup-card_date`}>
                        {fmtDate(_createdAt)}
                    </p>
                    <div className={`flex gap-1.5`}>
                        <EyeIcon className={`size-6 text-primary`}/>
                        <span className={`text-16-medium`}>
                            {views}
                        </span>
                    </div>
                </div>

                <div className={`flex-between mt-5 gap-5`}>
                    <div className={`flex-1`}>
                        <Link href={`/user/${author?._id}`}>
                            <p className={`text-16-medium line-clamp-1`}>
                                {author?.name}
                            </p>
                        </Link>

                        <Link href={`/startup/${_id}`}>
                            <h3 className={`line-clamp-1 text-26-semibold`}>
                                {title}
                            </h3>
                        </Link>
                    </div>
                    <Link href={`/user/${author?._id}`}>
                        <Image src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a372922e-742a-41e7-982c-7a89e49c18b2/dfwq49r-a34f4247-7bd2-4ad3-86b5-51c7dbb3d235.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EzNzI5MjJlLTc0MmEtNDFlNy05ODJjLTdhODllNDljMThiMlwvZGZ3cTQ5ci1hMzRmNDI0Ny03YmQyLTRhZDMtODZiNS01MWM3ZGJiM2QyMzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5s--D16l0mkmhK7PkH2kn7UMAqSaXPMQlKwFyZFDp7Y"} alt={"placeholder"} width={48} height={48} className={`rounded-full`}/>

                    </Link>
                </div>

                <div className={`flex-between flex-col`}>
                    <img src={image} className={`startup-card_img`} alt={"Image Unavailable"}/>
                </div>
                  <Link href={`/startup/${_id}`}>
                    <p className={`line-clamp-3 mt-3 startup-card_desc`}>
                        {description}
                    </p>
                </Link>

                <div className={`flex-between gap-3 mt-5`}>
                    <Link href={`/?query=${category.toLowerCase()}`}>
                        <p className={`text-16-medium startup-card_date !bg-secondary`} >{category}</p>
                    </Link>
                    <Button className={`startup-card_btn`} asChild>
                        <Link href={`/startup/${_id}`}>
                            Details
                        </Link>
                    </Button>
                </div>

            </li>
        )
}
export default StartupCard

