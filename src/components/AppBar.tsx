import LinkInBio from "@/assets/icons/LinkInBio";
import Store from "@/assets/icons/Store";
import MediaKit from "@/assets/icons/MediaKit";
import Invoicing from "@/assets/icons/Invoicing";

const AppBar = () => {
    return (
        <div className="row-start-3 row-end-4 inline-flex p-1 pl-4 items-start gap-1 ">
            <div className="flex flex-col items-center justify-center gap-2 rounded-[100px] bg-white shadow-[0_6px_12px_0_rgba(92,115,131,0.08),0_4px_8px_0_rgba(92,115,131,0.08)]">
            <div className="flex p-2 rounded-[100px] mix-blend-luminosity hover:mix-blend-normal hover:backdrop-blur">
                <LinkInBio />
            </div>
            <div className="flex p-2 rounded-[100px] mix-blend-luminosity hover:mix-blend-normal hover:backdrop-blur">
                <Store />
            </div>
            <div className="flex p-2 rounded-[100px] mix-blend-luminosity hover:mix-blend-normal hover:backdrop-blur">
                <MediaKit />
            </div>
            <div className="flex p-2 rounded-[100px] mix-blend-luminosity hover:mix-blend-normal hover:backdrop-blur">
                <Invoicing />
            </div>
            </div>
        </div>
    )
}

export default AppBar;