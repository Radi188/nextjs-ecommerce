const Video = () => {
    return (
        <div className="bg-gray-50 py-10  ">
            <div className="  w-4/6 mx-auto text-center text-3xl">
                <div className="text-3xl mb-10 font-semibold text-center pt-5 border-b-2 border-b-sky-500 w-max p-1 mx-auto text-slate-900">Product Showcase</div>

                <iframe className="pt-6" width="100%" height="738" src="https://www.youtube.com/embed/JUSSwvp6jEc?autoplay=1&mute=1" title="Checkout Our Catalog" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Video;
