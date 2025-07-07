import { useState } from 'react';
import arrow from '/src/assets/arrow.png';

function CollapsibleSection({
  children,
  title,
  id = '',
  startCollapsed = false
}) {
  const [collapsed, setCollapsed] = useState(startCollapsed);
  const arrowRotation = collapsed ? 'rotate-180' : 'rotate-270';
  const visibility = collapsed ? 'hidden' : '';
  return (
    <>
      <div
        className='flex p-5 cursor-pointer'
        onClick={() => setCollapsed(!collapsed)}
        id={id}
      >
        <img src={arrow} className={`${arrowRotation}`} />
        <h2 className='ml-5 underline decoration-[var(--mint-accent)]'>
          {title}
        </h2>
      </div>
      <div className={`${visibility}`}>{children}</div>
    </>
  );
}

export default CollapsibleSection;
