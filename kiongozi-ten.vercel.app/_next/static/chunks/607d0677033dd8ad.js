(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 31713, e => {
    "use strict";
    var l = e.i(43476),
        t = e.i(71645);

    function a() {
        let [e, a] = (0, t.useState)("tab1");
        return (0, l.jsxs)("div", {
            className: "flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black",
            children: [(0, l.jsx)("div", {
                className: "overflow-x-auto border-b border-zinc-200 dark:border-zinc-800 scrollbar-hide",
                children: (0, l.jsx)("div", {
                    className: " inline-flex  flex-nowrap  w-max  items-center  gap-3  px-3  py-2 ",
                    children: [{
                        id: "tab1",
                        label: "Analysis Tools"
                    }, {
                        id: "tab2",
                        label: "Pro Tool"
                    }, {
                        id: "tab3",
                        label: "Trading View"
                    }, {
                        id: "tab5",
                        label: "DP Tool"
                    }, {
                        id: "tab6",
                        label: "Smart Edge"
                    }].map(t => (0, l.jsx)("button", {
                        onClick: () => a(t.id),
                        className: `
                px-5 py-3 
                text-sm sm:text-base 
                font-medium 
                whitespace-nowrap 
                transition-all 
                rounded-t-md
                min-w-[120px]      /* 👈 Forces proper scroll width */
                ${e===t.id?"border-b-2 border-blue-500 text-blue-600 dark:text-blue-400":"text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"}
              `,
                        children: t.label
                    }, t.id))
                })
            }), (0, l.jsxs)("div", {
                className: "flex-1",
                children: ["tab1" === e && (0, l.jsx)("div", {
                    style: {
                        height: "calc(100vh - 55px)",
                        overflow: "hidden",
                        position: "relative"
                    },
                    children: (0, l.jsx)("iframe", {
                        src: "https://api.binarytool.site/",
                        title: "Binary Tool",
                        className: "w-full border-0",
                        style: {
                            height: "calc(100vh - 55px + 20px)",
                            marginTop: "-100px"
                        }
                    })
                }), "tab2" === e && (0, l.jsx)("iframe", {
                    src: "https://new-tool-delta.vercel.app/",
                    title: "Second Tool",
                    className: "w-full border-0",
                    style: {
                        height: "calc(100vh - 55px)"
                    }
                }), "tab3" === e && (0, l.jsx)("iframe", {
                    src: "https://charts.deriv.com/deriv",
                    title: "Trading View",
                    className: "w-full border-0",
                    style: {
                        height: "calc(100vh - 55px)"
                    }
                }), "tab5" === e && (0, l.jsx)("iframe", {
                    src: "https://serene-marzipan-19f3d1.netlify.app/",
                    title: "DP Tool",
                    className: "w-full border-0",
                    style: {
                        height: "calc(100vh - 55px)"
                    }
                }), "tab6" === e && (0, l.jsx)("iframe", {
                    src: "https://unrivaled-boba-44b870.netlify.app/",
                    title: "Smart Edge",
                    className: "w-full border-0",
                    style: {
                        height: "calc(100vh - 55px)"
                    }
                })]
            })]
        })
    }
    e.s(["default", () => a])
}]);