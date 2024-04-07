exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 9882:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 5589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1417);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);


function getPostMetadata() {
    const folder = "posts/";
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(folder);
    const markdownPosts = files.filter((file)=>file.endsWith(".md"));
    const posts = markdownPosts.map((fileName)=>{
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`posts/${fileName}`, "utf8");
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            image: matterResult.data.image,
            image_alt: matterResult.data.image_alt,
            employer: matterResult.data.employer,
            year: matterResult.data.year,
            roles: matterResult.data.roles,
            slug: fileName.replace(".md", ""),
            summary: matterResult.data.summary,
            site_link: matterResult.data.site_link
        };
    });
    return posts;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPostMetadata);


/***/ })

};
;