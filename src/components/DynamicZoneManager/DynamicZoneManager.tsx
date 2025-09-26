import React from 'react';
import Hero from '../Hero';
import TwoColumnContent from '../TwoColumnContent';
import OneColumnContent from '../OneColumnContent';

interface DynamicZoneComponent {
    id: number;
    __component: string;
    [key: string]: any;
}

export interface DynamicZoneManagerProps {
    dynamicZone: DynamicZoneComponent[];
    baseImageUrl?: string;
}

const componentMapping: { [key: string]: React.ComponentType<any> } = {
    'dynamic-zone.hero': Hero,
    'dynamic-zone.two-column-content': TwoColumnContent,
    'dynamic-zone.one-column-content': OneColumnContent,
};

const DynamicZoneManager: React.FC<DynamicZoneManagerProps> = ({
    dynamicZone,
    baseImageUrl = ''
}) => {
    return (
        <>
            {dynamicZone.map((componentData, index) => {
                const Component = componentMapping[componentData.__component];
                if (!Component) {
                    console.warn(`No component found for: ${componentData.__component}`);
                    return null;
                }

                // Add baseImageUrl to components that need it
                const propsWithImageUrl = {
                    ...componentData,
                    ...(componentData.__component === 'dynamic-zone.hero' ||
                        componentData.__component === 'dynamic-zone.two-column-content'
                        ? { baseImageUrl } : {})
                };

                return <Component key={index} {...propsWithImageUrl} />;
            })}
        </>
    );
};

export default DynamicZoneManager;
