import React from "react";

const NavBtn = ({ curPage, pageLink, children, ...props }) => {
    function cl(cur, pLink) {
        if (cur == pLink) {
            return 'bg-teal-200 border-teal-300 hover:bg-teal-100 hover:border-teal-400 dark:hover:bg-teal-800 dark:bg-teal-900 dark:border-teal-700'
        } else {
            return 'bg-transparent border-transparent hover:bg-gray-200 dark:hover:bg-gray-700'
        }
    }

  return (
    <button {...props} className={cl(curPage, pageLink) + ' rounded-2xl px-3 py-1 border-2 transition-colors box-content'}>
      {children}
    </button>
  );
};

export default NavBtn;
