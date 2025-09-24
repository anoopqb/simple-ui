import "./Hero.css";

export interface HeroProps {
    backgroundImage: string;
    title: string;
    subtitle?: string;
    ctaText: string;
    ctaHref?: string;
    onCtaClick?: () => void;
    height?: string;
    overlay?: boolean;
    textAlign?: 'left' | 'center' | 'right';
}

const Hero = ({
    backgroundImage,
    title,
    subtitle,
    ctaText,
    ctaHref,
    onCtaClick,
    height = "60vh",
    overlay = true,
    textAlign = "center"
}: HeroProps) => {
    const handleCtaClick = (e: React.MouseEvent) => {
        if (onCtaClick) {
            e.preventDefault();
            onCtaClick();
        }
    };

    return (
        <section
            className={`simple-ui-hero simple-ui-hero--${textAlign}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                height
            }}
        >
            {overlay && <div className="simple-ui-hero__overlay" />}
            <div className="simple-ui-hero__content">
                <h1 className="simple-ui-hero__title">{title}</h1>
                {subtitle && (
                    <p className="simple-ui-hero__subtitle">{subtitle}</p>
                )}
                {ctaHref ? (
                    <a
                        href={ctaHref}
                        className="simple-ui-hero__cta"
                        onClick={handleCtaClick}
                    >
                        {ctaText}
                    </a>
                ) : (
                    <button
                        className="simple-ui-hero__cta"
                        onClick={handleCtaClick}
                    >
                        {ctaText}
                    </button>
                )}
            </div>
        </section>
    );
};

export default Hero;
