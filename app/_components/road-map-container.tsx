import Link from "next/link";
import { RoadmapType } from "../types/road-map";

export type RoadMapConfig = {
    color: string;
    type: RoadmapType;
    count: number
}

const RoadMapContainer = () => {
    const ROAD_MAP_CONFIGS: RoadMapConfig[] = [{
        'color': 'orange',
        'count': 2,
        'type': 'Planned'

    }, {
        'color': 'primary-purple',
        'count': 3,
        'type': 'In-Progress'

    }, {
        'color': 'sky-blue',
        'count': 1,
        'type': 'Live'

    }];

    return (
        <div className='rounded-primary flex   flex-col h-[12rem] w-[14.4rem] bg-white p-6'>
            <div className="flex justify-between w-full items-center mb-6">
                <span className="font-bold text-night-sky-blue text-lg inline-block">Roadmap</span>
                <Link href="/roadmap" className="underline text-dark-blue text-sm font-semibold">
                    View
                </Link>
            </div>
            <div className=" w-full flex flex-col gap-y-2">
                {ROAD_MAP_CONFIGS.map(({ color, count, type }) => (
                    <div>
                        <div className={`w-3 h-3 rounded-primary  inline-block bg-${color} mr-4`} />
                        <span className="text-base text-grayish-blue">{type}</span>
                        <div className="inline-block float-right">{count}</div>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default RoadMapContainer;
