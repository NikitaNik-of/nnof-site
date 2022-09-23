import React from "react";

const NavBtn = ({ curPage, pageLink, children, ...props }) => {
    function cl(cur, pLink) {
        if (cur == pLink) {
            return 'box-content bg-teal-200 border-teal-300 rounded-2xl px-3 py-1 border-2 hover:bg-teal-100 hover:border-teal-400 transition-colors dark:hover:bg-teal-800 dark:bg-teal-900 dark:border-teal-700'
        } else {
            return 'box-content bg-transparent border-transparent rounded-2xl px-3 py-1 border-2 hover:bg-gray-200 transition-colors dark:hover:bg-gray-700'
        }
    }

  return (
    <button {...props} className={cl(curPage, pageLink)}>
      {children}
    </button>
  );
};

export default NavBtn;
