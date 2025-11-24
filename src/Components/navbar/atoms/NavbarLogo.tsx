import Image from 'next/image';
import Link from 'next/link';

interface NavbarLogoProps {
  href?: string;
  logoSrc?: string;
  logoAlt?: string;
  title?: string;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  onClick?: () => void;
}

export default function NavbarLogo({
  href = '/',
  logoSrc = '/assets/Nav-logo.png',
  logoAlt = 'Eudica Logo',
  title,
  className = 'shrink-0 flex items-center gap-2 z-5',
  imageClassName = 'h-5 w-5 rounded',
  textClassName,
  onClick,
}: NavbarLogoProps) {
  return (
    <Link href={href} className={className} onClick={onClick}>
      <div className="relative bg-yellow-200 rounded p-1.5 md:p-2">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={40}
          height={40}
          quality={100}
          className={imageClassName}
          priority
        />
      </div>
      {title && <p className={textClassName}>{title}</p>}
    </Link>
  );
}
