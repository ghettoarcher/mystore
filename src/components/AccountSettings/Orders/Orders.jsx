import { useState, useRef, useEffect } from 'react';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('Current');
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef([]);

  const tabs = [
    { name: 'Current', count: 5 },
    { name: 'Delivered', count: 10 },
    { name: 'Canceled', count: 2 },
    { name: 'Returned', count: 3 }
  ];

  useEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.name === activeTab);
    const tabWidth = tabsRef.current[activeIndex]?.offsetWidth || 0;
    const tabOffset = tabsRef.current[activeIndex]?.offsetLeft || 0;
    setUnderlineStyle({
      width: `${tabWidth}px`,
      transform: `translateX(${tabOffset}px)`
    });
  }, [activeTab, tabs]);

  return (
    <div className="container mt-5">
      <nav className="nav position-relative">
        {tabs.map((tab, index) => (
          <a
            key={tab.name}
            className={`nav-link ${activeTab === tab.name ? 'active' : ''}`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(tab.name);
            }}
            ref={el => tabsRef.current[index] = el}
          >
            {tab.name} <span className={`badge ${activeTab === tab.name ? 'badge-primary' : 'badge-secondary'}`}>{tab.count}</span>
          </a>
        ))}
        <div className="underline" style={underlineStyle}></div>
      </nav>
      <div className="content mt-3">
        <h3>{activeTab} Content</h3>
        {/* Здесь может быть контент для активной вкладки */}
      </div>
    </div>
  );
};

export default Orders;
