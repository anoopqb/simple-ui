import React from 'react';
import { TwoColumnContentProps, ImageData } from './types';
import './TwoColumnContent.css';

const TwoColumnContent: React.FC<TwoColumnContentProps> = ({
    title,
    description,
    reverse_column = false,
    cta = [],
    image = [],
    className = '',
}) => {
    const containerClasses = [
        'two-column-content',
        reverse_column ? 'reverse' : '',
        className
    ].filter(Boolean).join(' ');

    const getOptimalImageUrl = (imageData: ImageData): string => {
        // Return the best available image format, preferring medium > small > large > original
        if (imageData.formats.medium) {
            return imageData.formats.medium.url;
        }
        if (imageData.formats.small) {
            return imageData.formats.small.url;
        }
        if (imageData.formats.large) {
            return imageData.formats.large.url;
        }
        return imageData.url;
    };

    const renderCTAButtons = () => {
        if (!cta || cta.length === 0) return null;

        return (
            <div className="two-column-content__cta-container">
                {cta.map((button) => (
                    <a
                        key={button.id}
                        href={button.url}
                        target={button.target}
                        rel={button.target === '_blank' ? 'noopener noreferrer' : undefined}
                        className="two-column-content__cta"
                    >
                        {button.label}
                    </a>
                ))}
            </div>
        );
    };

    const renderImage = () => {
        if (!image || image.length === 0) return null;

        const primaryImage = image[0]; // Use the first image
        const imageUrl = getOptimalImageUrl(primaryImage);
        const altText = primaryImage.alternativeText || primaryImage.caption || title;

        return (
            <div className="two-column-content__image">
                <img
                    src={imageUrl}
                    alt={altText}
                    width={primaryImage.width}
                    height={primaryImage.height}
                    loading="lazy"
                />
            </div>
        );
    };

    return (
        <div className={containerClasses}>
            <div className="two-column-content__text">
                <h2 className="two-column-content__title">{title}</h2>
                <p className="two-column-content__description">{description}</p>
                {renderCTAButtons()}
            </div>
            {renderImage()}
        </div>
    );
};

export default TwoColumnContent;
