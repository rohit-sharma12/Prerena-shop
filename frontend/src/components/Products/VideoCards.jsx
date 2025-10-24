import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
    { id: 1, src: "/video1.mp4" },
    { id: 2, src: "/video3.mp4" },
    { id: 3, src: "/video2.mp4" },
    { id: 4, src: "/video3.mp4" },
    { id: 5, src: "/video4.mp4" },
];

const VideoCards = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount =
                direction === "left"
                    ? -scrollRef.current.offsetWidth
                    : scrollRef.current.offsetWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="w-full py-10 bg-white">
            <h2 className="text-3xl font-semibold text-center mb-8">
                Watch These Collections
            </h2>

            <div className="relative max-w-7xl mx-auto">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-scroll scroll-smooth no-scrollbar px-10"
                >
                    {videos?.map((video) => (
                        <div
                            key={video.id}
                            className="flex-none w-64 md:w-72 lg:w-80 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <video
                                src={video.src}
                                muted
                                loop
                                autoPlay
                                playsInline
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
};

export default VideoCards;
