import { useEffect } from 'react';

interface GoogleAdProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  className?: string;
}

export function GoogleAd({ slot, format = 'auto', style, className = '' }: GoogleAdProps) {
  useEffect(() => {
    try {
      // Push ad to AdSense queue
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`google-ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your actual AdSense ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

// Placeholder Ad Component (for testing without real ads)
export function GoogleAdPlaceholder({ 
  height = '250px', 
  className = '',
  text = 'Advertisement' 
}: { 
  height?: string; 
  className?: string;
  text?: string;
}) {
  return (
    <div 
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${className}`}
      style={{ minHeight: height }}
    >
      <div className="text-center">
        <div className="text-gray-400 text-sm font-medium mb-1">{text}</div>
        <div className="text-xs text-gray-300">Google AdSense Placeholder</div>
      </div>
    </div>
  );
}
