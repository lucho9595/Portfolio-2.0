import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";

export default function Maps(){

    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [60, 30, 0],
                center: [-5, -3],
                scale: 1900
            }}
            style={{ width: "100%", height: "100%" }}
        >
            <Geographies
                geography="/features.json"
                fill="#2C0650"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[-58, -36]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "#ffffff",
                    strokeWidth: 3,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="end" fill="#ffffff">
                    {"Buenos Aires"}                </text>
            </Annotation>
        </ComposableMap>
    );
};