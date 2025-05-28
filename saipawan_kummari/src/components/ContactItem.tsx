import React from 'react';

const ContactItem = ({ Icon, title, content, href }: any) => {
  const contentElement = href ? (
    <a href={href} className="text-gray-300 hover:text-blue-400 transition">
      {content}
    </a>
  ) : (
    <span className="text-gray-300">{content}</span>
  );

  return (
    <div className="flex items-start space-x-3">
      <Icon className="text-blue-400 mt-1" size={20} />
      <div>
        <h4 className="text-sm font-semibold text-gray-100">{title}</h4>
        <p className="text-sm">{contentElement}</p>
      </div>
    </div>
  );
};

export default ContactItem;
