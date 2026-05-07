export default function GlassCard({ children, className = '', hover = false }) {
  return (
    <div
      className={`glass-card rounded-2xl transition-all duration-300
        ${hover ? 'hover:shadow-premium hover:-translate-y-1' : ''}
        ${className}`}
    >
      {children}
    </div>
  );
}
