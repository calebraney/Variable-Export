var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const clientFirstVariables = [
    /////////////////
    // Adaptive Sizes
    { type: "Size", name: "size/0rem", value: 0, unit: "rem" },
    { type: "Size", name: "size/0.125rem", value: 0.125, unit: "rem" },
    { type: "Size", name: "size/0.25rem", value: 0.25, unit: "rem" },
    { type: "Size", name: "size/0.5rem", value: 0.5, unit: "rem" },
    { type: "Size", name: "size/.75rem", value: 0.75, unit: "rem" },
    { type: "Size", name: "size/1rem", value: 1, unit: "rem" },
    { type: "Size", name: "size/1.25rem", value: 1.25, unit: "rem" },
    { type: "Size", name: "size/1.5rem", value: 1.5, unit: "rem" },
    { type: "Size", name: "size/1.75rem", value: 1.75, unit: "rem" },
    { type: "Size", name: "size/2rem", value: 2, unit: "rem" },
    { type: "Size", name: "size/2.5rem", value: 2.5, unit: "rem" },
    { type: "Size", name: "size/3rem", value: 3, unit: "rem" },
    { type: "Size", name: "size/3.5rem", value: 3.5, unit: "rem" },
    { type: "Size", name: "size/4rem", value: 4, unit: "rem" },
    { type: "Size", name: "size/4.5rem", value: 4.5, unit: "rem" },
    { type: "Size", name: "size/5rem", value: 5, unit: "rem" },
    { type: "Size", name: "size/5.5rem", value: 5.5, unit: "rem" },
    { type: "Size", name: "size/6rem", value: 6, unit: "rem" },
    { type: "Size", name: "size/6.5rem", value: 6.5, unit: "rem" },
    { type: "Size", name: "size/7rem", value: 7, unit: "rem" },
    { type: "Size", name: "size/7.5rem", value: 7.5, unit: "rem" },
    { type: "Size", name: "size/8rem", value: 8, unit: "rem" },
    { type: "Size", name: "size/8.5rem", value: 8.5, unit: "rem" },
    { type: "Size", name: "size/9rem", value: 9, unit: "rem" },
    { type: "Size", name: "size/9.5rem", value: 9.5, unit: "rem" },
    { type: "Size", name: "size/10rem", value: 10, unit: "rem" },
    { type: "Size", name: "size/11rem", value: 11, unit: "rem" },
    { type: "Size", name: "size/12rem", value: 12, unit: "rem" },
    { type: "Size", name: "size/13rem", value: 13, unit: "rem" },
    { type: "Size", name: "size/14rem", value: 14, unit: "rem" },
    { type: "Size", name: "size/15rem", value: 15, unit: "rem" },
    { type: "Size", name: "size/16rem", value: 16, unit: "rem" },
    // Text Transform
    { type: "Size", name: "text-transform/inherit", value: 0, unit: "px" },
    { type: "Size", name: "text-transform/none", value: 0, unit: "px" },
    { type: "Size", name: "text-transform/uppercase", value: 0, unit: "px" },
    { type: "Size", name: "text-transform/capitalize", value: 0, unit: "px" },
    { type: "Size", name: "text-transform/lowercase", value: 0, unit: "px" },
    // Line Height
    { type: "Size", name: "line-height/1", value: 1, unit: "em" },
    { type: "Size", name: "line-height/1.1", value: 1.1, unit: "em" },
    { type: "Size", name: "line-height/1.3", value: 1.3, unit: "em" },
    { type: "Size", name: "line-height/1.5", value: 1.5, unit: "em" },
    // Letter Spacing
    { type: "Size", name: "letter-spacing/0em", value: 0, unit: "em" },
    { type: "Size", name: "letter-spacing/-0.03em", value: -0.03, unit: "em" },
    // Font Weights
    { type: "Size", name: "font-weight/100", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/200", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/300", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/400", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/500", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/600", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/700", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/800", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/900", value: 0, unit: "px" },
    // Font Global
    { type: "FontFamily", name: "font/inherit", value: "system" },
    { type: "FontFamily", name: "font/primary-family", value: "Arial" },
    { type: "Size", name: "font/primary-light", value: 0, unit: "px" },
    { type: "Size", name: "font/primary-regular", value: 0, unit: "px" },
    { type: "Size", name: "font/primary-medium", value: 0, unit: "px" },
    { type: "Size", name: "font/primary-bold", value: 0, unit: "px" },
    { type: "FontFamily", name: "font/secondary-family", value: "Montserrat" },
    { type: "Size", name: "font/secondary-regular", value: 0, unit: "px" },
    { type: "Size", name: "font/secondary-bold", value: 0, unit: "px" },
    // Page Structure
    { type: "Size", name: "..padding/horizontal", value: 5, unit: "vw" },
    { type: "Size", name: "..padding/section - large", value: 9, unit: "rem" },
    { type: "Size", name: "..padding/section - main", value: 6, unit: "rem" },
    { type: "Size", name: "..padding/section - small", value: 3, unit: "rem" },
    { type: "Size", name: "..container/large", value: 80, unit: "rem" },
    { type: "Size", name: "..container/main", value: 64, unit: "rem" },
    { type: "Size", name: "..container/small", value: 48, unit: "rem" },
    // Border Width
    { type: "Size", name: "..border width/main", value: 1, unit: "px" },
    // Border Radius
    { type: "Size", name: "..border radius/x small", value: 0.5, unit: "rem" },
    { type: "Size", name: "..border radius/small", value: 1, unit: "rem" },
    { type: "Size", name: "..border radius/medium", value: 1.5, unit: "rem" },
    { type: "Size", name: "..border radius/large", value: 3, unit: "rem" },
    { type: "Size", name: "..border radius/rounded", value: 100, unit: "vw" },
    { type: "Size", name: "..border radius/card", value: 4, unit: "rem" },
    { type: "Size", name: "..border radius/image", value: 4, unit: "rem" },
    // Typography - .body
    { type: "Size", name: ".body/font-size", value: 5, unit: "rem" },
    { type: "FontFamily", name: ".body/font-family", value: "system" },
    { type: "Size", name: ".body/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".body/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".body/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".body/text-transform", value: 0, unit: "px" },
    // Typography - .h1
    { type: "Size", name: ".h1/font-size", value: 5, unit: "rem" },
    { type: "FontFamily", name: ".h1/font-family", value: "system" },
    { type: "Size", name: ".h1/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h1/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h1/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h1/text-transform", value: 0, unit: "px" },
    // Typography - .h2
    { type: "Size", name: ".h2/font-size", value: 4, unit: "rem" },
    { type: "FontFamily", name: ".h2/font-family", value: "system" },
    { type: "Size", name: ".h2/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h2/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h2/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h2/text-transform", value: 0, unit: "px" },
    // Typography - .h3
    { type: "Size", name: ".h3/font-size", value: 3, unit: "rem" },
    { type: "FontFamily", name: ".h3/font-family", value: "system" },
    { type: "Size", name: ".h3/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h3/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h3/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h3/text-transform", value: 0, unit: "px" },
    // Typography - .h4
    { type: "Size", name: ".h4/font-size", value: 2, unit: "rem" },
    { type: "FontFamily", name: ".h4/font-family", value: "system" },
    { type: "Size", name: ".h4/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h4/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h4/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h4/text-transform", value: 0, unit: "px" },
    // Typography - .h5
    { type: "Size", name: ".h5/font-size", value: 1.5, unit: "rem" },
    { type: "FontFamily", name: ".h5/font-family", value: "system" },
    { type: "Size", name: ".h5/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h5/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h5/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h5/text-transform", value: 0, unit: "px" },
    // Typography - .h6
    { type: "Size", name: ".h6/font-size", value: 1.25, unit: "rem" },
    { type: "FontFamily", name: ".h6/font-family", value: "system" },
    { type: "Size", name: ".h6/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h6/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h6/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h6/text-transform", value: 0, unit: "px" },
    // Typography - .p
    { type: "Size", name: ".p/font-size", value: 1, unit: "rem" },
    { type: "FontFamily", name: ".p/font-family", value: "system" },
    { type: "Size", name: ".p/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".p/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".p/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".p/text-transform", value: 0, unit: "px" },
    // Typography - .p
    { type: "Size", name: ".p-small/font-size", value: 0.875, unit: "rem" },
    { type: "Size", name: ".p-large/font-size", value: 1.25, unit: "rem" },
    /////////////////
    // Semantic Colors
    { type: "Color", name: "...color/background/primary", value: "#ffffff" },
    { type: "Color", name: "...color/background/secondary", value: "#ffffff" },
    { type: "Color", name: "...color/background/accent", value: "#ffffff" },
    { type: "Color", name: "...color/background/alternate", value: "#ffffff" },
    { type: "Color", name: "...color/text/primary", value: "#ffffff" },
    { type: "Color", name: "...color/text/secondary", value: "#ffffff" },
    { type: "Color", name: "...color/text/accent", value: "#ffffff" },
    { type: "Color", name: "...color/text/alternate", value: "#ffffff" },
    { type: "Color", name: "...color/border/primary", value: "#ffffff" },
    { type: "Color", name: "...color/border/secondary", value: "#ffffff" },
    { type: "Color", name: "...color/border/accent", value: "#ffffff" },
    { type: "Color", name: "...color/border/alternate", value: "#ffffff" },
    // Base Colors
    { type: "Color", name: "...swatch/dark 1", value: "#ffffff" },
    { type: "Color", name: "...swatch/dark 2", value: "#272525" },
    { type: "Color", name: "...swatch/dark 3", value: "#5d5c5c" },
    { type: "Color", name: "...swatch/light 1", value: "#ffffff" },
    { type: "Color", name: "...swatch/light 2", value: "#f4f4f4" },
    { type: "Color", name: "...swatch/light 3", value: "#cfcfcf" },
];
const lumosVariables = [
    /////////////////
    // Adaptive Sizes
    { type: "Size", name: "size/0rem", value: 0, unit: "rem" },
    { type: "Size", name: "size/0.125rem", value: 0.125, unit: "rem" },
    { type: "Size", name: "size/0.25rem", value: 0.25, unit: "rem" },
    { type: "Size", name: "size/0.5rem", value: 0.5, unit: "rem" },
    { type: "Size", name: "size/.75rem", value: 0.75, unit: "rem" },
    { type: "Size", name: "size/1rem", value: 1, unit: "rem" },
    { type: "Size", name: "size/1.25rem", value: 1.25, unit: "rem" },
    { type: "Size", name: "size/1.5rem", value: 1.5, unit: "rem" },
    { type: "Size", name: "size/1.75rem", value: 1.75, unit: "rem" },
    { type: "Size", name: "size/2rem", value: 2, unit: "rem" },
    { type: "Size", name: "size/2.5rem", value: 2.5, unit: "rem" },
    { type: "Size", name: "size/3rem", value: 3, unit: "rem" },
    { type: "Size", name: "size/3.5rem", value: 3.5, unit: "rem" },
    { type: "Size", name: "size/4rem", value: 4, unit: "rem" },
    { type: "Size", name: "size/4.5rem", value: 4.5, unit: "rem" },
    { type: "Size", name: "size/5rem", value: 5, unit: "rem" },
    { type: "Size", name: "size/5.5rem", value: 5.5, unit: "rem" },
    { type: "Size", name: "size/6rem", value: 6, unit: "rem" },
    { type: "Size", name: "size/6.5rem", value: 6.5, unit: "rem" },
    { type: "Size", name: "size/7rem", value: 7, unit: "rem" },
    { type: "Size", name: "size/7.5rem", value: 7.5, unit: "rem" },
    { type: "Size", name: "size/8rem", value: 8, unit: "rem" },
    { type: "Size", name: "size/8.5rem", value: 8.5, unit: "rem" },
    { type: "Size", name: "size/9rem", value: 9, unit: "rem" },
    { type: "Size", name: "size/9.5rem", value: 9.5, unit: "rem" },
    { type: "Size", name: "size/10rem", value: 10, unit: "rem" },
    { type: "Size", name: "size/11rem", value: 11, unit: "rem" },
    { type: "Size", name: "size/12rem", value: 12, unit: "rem" },
    { type: "Size", name: "size/13rem", value: 13, unit: "rem" },
    { type: "Size", name: "size/14rem", value: 14, unit: "rem" },
    { type: "Size", name: "size/15rem", value: 15, unit: "rem" },
    { type: "Size", name: "size/16rem", value: 16, unit: "rem" },
    // Text Transform
    { type: "Size", name: "text-transform/inherit", value: 0, unit: "px" },
    { type: "Size", name: "text-transform/none", value: 0, unit: "px" },
    { type: "Size", name: "text-transform/uppercase", value: 0, unit: "px" },
    { type: "Size", name: "text-transform/capitalize", value: 0, unit: "px" },
    { type: "Size", name: "text-transform/lowercase", value: 0, unit: "px" },
    // Line Height
    { type: "Size", name: "line-height/1", value: 1, unit: "em" },
    { type: "Size", name: "line-height/1.1", value: 1.1, unit: "em" },
    { type: "Size", name: "line-height/1.3", value: 1.3, unit: "em" },
    { type: "Size", name: "line-height/1.5", value: 1.5, unit: "em" },
    // Letter Spacing
    { type: "Size", name: "letter-spacing/0em", value: 0, unit: "em" },
    { type: "Size", name: "letter-spacing/-0.03em", value: -0.03, unit: "em" },
    // Font Weights
    { type: "Size", name: "font-weight/100", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/200", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/300", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/400", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/500", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/600", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/700", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/800", value: 0, unit: "px" },
    { type: "Size", name: "font-weight/900", value: 0, unit: "px" },
    // Page Structure
    { type: "Size", name: "..padding-horizontal/main", value: 5, unit: "vw" },
    { type: "Size", name: "..padding-vertical/large", value: 9, unit: "rem" },
    { type: "Size", name: "..padding-vertical/main", value: 6, unit: "rem" },
    { type: "Size", name: "..padding-vertical/small", value: 3, unit: "rem" },
    { type: "Size", name: "..max-width/large", value: 96, unit: "rem" },
    { type: "Size", name: "..max-width/main", value: 80, unit: "rem" },
    { type: "Size", name: "..max-width/small", value: 64, unit: "rem" },
    //Rich Text
    { type: "Size", name: "..rich-text/padding-small", value: 0.75, unit: "rem" },
    { type: "Size", name: "..rich-text/padding-medium", value: 1.5, unit: "rem" },
    { type: "Size", name: "..rich-text/padding-large", value: 3.5, unit: "rem" },
    // Border Width
    { type: "Size", name: "..border-width/main", value: 1, unit: "px" },
    { type: "Size", name: "..svg-stroke-width/main", value: 1, unit: "px" },
    // Border Radius
    { type: "Size", name: "..radius/small", value: 1, unit: "rem" },
    { type: "Size", name: "..radius/medium", value: 2, unit: "rem" },
    { type: "Size", name: "..radius/large", value: 4, unit: "rem" },
    { type: "Size", name: "..radius/round", value: 100, unit: "vw" },
    { type: "Size", name: "..radius/image", value: 4, unit: "rem" },
    // Grid Gap
    { type: "Size", name: "..grid gap/main", value: 1, unit: "rem" },
    // Font Global
    { type: "FontFamily", name: "font/inherit", value: "system" },
    { type: "FontFamily", name: "font/primary-family", value: "Arial" },
    { type: "Size", name: "font/primary-light", value: 0, unit: "px" },
    { type: "Size", name: "font/primary-regular", value: 0, unit: "px" },
    { type: "Size", name: "font/primary-medium", value: 0, unit: "px" },
    { type: "Size", name: "font/primary-bold", value: 0, unit: "px" },
    { type: "FontFamily", name: "font/secondary-family", value: "Montserrat" },
    { type: "Size", name: "font/secondary-regular", value: 0, unit: "px" },
    { type: "Size", name: "font/secondary-bold", value: 0, unit: "px" },
    // Typography - .body
    { type: "Size", name: ".body/font-size", value: 5, unit: "rem" },
    { type: "FontFamily", name: ".body/font-family", value: "system" },
    { type: "Size", name: ".body/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".body/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".body/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".body/text-transform", value: 0, unit: "px" },
    // Typography - .h1
    { type: "Size", name: ".h1/font-size", value: 5, unit: "rem" },
    { type: "FontFamily", name: ".h1/font-family", value: "system" },
    { type: "Size", name: ".h1/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h1/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h1/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h1/text-transform", value: 0, unit: "px" },
    // Typography - .h2
    { type: "Size", name: ".h2/font-size", value: 4, unit: "rem" },
    { type: "FontFamily", name: ".h2/font-family", value: "system" },
    { type: "Size", name: ".h2/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h2/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h2/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h2/text-transform", value: 0, unit: "px" },
    // Typography - .h3
    { type: "Size", name: ".h3/font-size", value: 3, unit: "rem" },
    { type: "FontFamily", name: ".h3/font-family", value: "system" },
    { type: "Size", name: ".h3/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h3/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h3/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h3/text-transform", value: 0, unit: "px" },
    // Typography - .h4
    { type: "Size", name: ".h4/font-size", value: 2, unit: "rem" },
    { type: "FontFamily", name: ".h4/font-family", value: "system" },
    { type: "Size", name: ".h4/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h4/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h4/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h4/text-transform", value: 0, unit: "px" },
    // Typography - .h5
    { type: "Size", name: ".h5/font-size", value: 1.5, unit: "rem" },
    { type: "FontFamily", name: ".h5/font-family", value: "system" },
    { type: "Size", name: ".h5/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h5/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h5/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h5/text-transform", value: 0, unit: "px" },
    // Typography - .h6
    { type: "Size", name: ".h6/font-size", value: 1.25, unit: "rem" },
    { type: "FontFamily", name: ".h6/font-family", value: "system" },
    { type: "Size", name: ".h6/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".h6/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".h6/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".h6/text-transform", value: 0, unit: "px" },
    // Typography - .p-large
    { type: "Size", name: ".p-large/font-size", value: 5, unit: "rem" },
    { type: "FontFamily", name: ".p-large/font-family", value: "system" },
    { type: "Size", name: ".p-large/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".p-large/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".p-large/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".p-large/text-transform", value: 0, unit: "px" },
    // Typography - .paragraph-small
    { type: "Size", name: ".p-small/font-size", value: 5, unit: "rem" },
    { type: "FontFamily", name: ".p-small/font-family", value: "system" },
    { type: "Size", name: ".p-small/font-weight", value: 0, unit: "px" },
    { type: "Size", name: ".p-small/line-height", value: 0, unit: "px" },
    { type: "Size", name: ".p-small/letter-spacing", value: 0, unit: "px" },
    { type: "Size", name: ".p-small/text-transform", value: 0, unit: "px" },
    /////////////////
    // Semantic Colors
    { type: "Color", name: "...theme/background 1", value: "#ffffff" },
    { type: "Color", name: "...theme/background 2", value: "#ffffff" },
    { type: "Color", name: "...theme/background 3", value: "#ffffff" },
    { type: "Color", name: "...theme/background 4", value: "#ffffff" },
    { type: "Color", name: "...theme/text 1", value: "#ffffff" },
    { type: "Color", name: "...theme/text 2", value: "#ffffff" },
    { type: "Color", name: "...theme/text 3", value: "#ffffff" },
    { type: "Color", name: "...theme/text 4", value: "#ffffff" },
    { type: "Color", name: "...theme/border 1", value: "#ffffff" },
    { type: "Color", name: "...theme/border 2", value: "#ffffff" },
    { type: "Color", name: "...theme/border 3", value: "#ffffff" },
    { type: "Color", name: "...theme/border 4", value: "#ffffff" },
    // Base Colors
    { type: "Color", name: "...swatch/dark 1", value: "#ffffff" },
    { type: "Color", name: "...swatch/dark 2", value: "#272525" },
    { type: "Color", name: "...swatch/dark 3", value: "#5d5c5c" },
    { type: "Color", name: "...swatch/light 1", value: "#ffffff" },
    { type: "Color", name: "...swatch/light 2", value: "#f4f4f4" },
    { type: "Color", name: "...swatch/light 3", value: "#cfcfcf" },
    { type: "Color", name: "...swatch/brand 1", value: "#ffffff" },
];
const testVariables = [
    /////////////////
    // Adaptive Sizes
    { type: "Size", name: "test/size 1rem", value: 1, unit: "rem" },
    { type: "Color", name: "test/color", value: "red" },
    { type: "FontFamily", name: "test/font", value: "system" },
    {
        type: "Color",
        name: "test-2/reference-color",
        value: "test/color",
        reference: true,
    },
];
//////////////////////////////////
// Variables App
//repeatable function to create a variable
const createVariable = function (variable) {
    return __awaiter(this, void 0, void 0, function* () {
        //Get the collection of the current Webflow Variables
        const collection = yield webflow.getDefaultVariableCollection();
        // Fetch all variables within the default collection
        const currentVariables = yield (collection === null || collection === void 0 ? void 0 : collection.getAllVariables());
        let createdVariable;
        let referenceValue;
        // get the type, name and value of the variable
        let { type, name, value, unit, reference = false } = variable;
        // if reference is true find the referenced variable and update the value
        if (reference === true) {
            // Get Variable by Name
            const referenceVariable = yield (collection === null || collection === void 0 ? void 0 : collection.getVariableByName(value));
            console.log(referenceVariable);
            // if reference is set and type is Size
            if (referenceVariable && referenceVariable.type === "Size") {
                // Create Size Variable with a Size Value
                const createdSizeVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createSizeVariable(name, referenceVariable));
            } // if reference is set and type is Color
            if (referenceVariable && referenceVariable.type === "Color") {
                // Create Color Variable with a Size Value
                const createdColorVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createColorVariable(name, referenceVariable));
            } // if reference is set and type is font family
            if (referenceVariable && referenceVariable.type === "FontFamily") {
                const createdFontFamilyVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createFontFamilyVariable(name, referenceVariable));
            }
            else {
                yield webflow.notify({
                    type: "Error",
                    message: "The reference for this variable was not found",
                });
            }
        }
        //no reference size variable
        if (!reference && type === "Size") {
            createdVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createSizeVariable(name, {
                unit: unit,
                value: value,
            }));
        }
        //no reference Color Variable
        if (!reference && type === "Color") {
            createdVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createColorVariable(name, value));
        }
        // no reference font family varialbe
        if (!reference && type === "FontFamily") {
            // Create Font Family Variable with a Font Family Name
            createdVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createFontFamilyVariable(name, value));
        }
    });
};
// function to import variables
const importVariables = function (variables) {
    return __awaiter(this, void 0, void 0, function* () {
        //handle error if no variables are set
        if (variables.length === 0) {
            yield webflow.notify({
                type: "Error",
                message: "There are no variables set to import",
            });
            return;
        }
        variables.forEach((variable) => __awaiter(this, void 0, void 0, function* () {
            createVariable(variable);
        }));
        //after all variables have been created notify the amount of variables created
        yield webflow.notify({
            type: "Success",
            message: `Finished Importing Variables`,
        });
    });
};
//button event listeners for app
function addButtonListeners() {
    document.getElementById("client-first").onclick = () => {
        importVariables(clientFirstVariables);
    };
    document.getElementById("lumos").onclick = () => {
        importVariables(lumosVariables);
    };
    // tests
    document.getElementById("test-import").onclick = () => {
        importVariables(testVariables);
    };
    document.getElementById("test-1").onclick = () => {
        test1();
    };
    document.getElementById("test-2").onclick = () => {
        test2();
    };
    document.getElementById("test-3").onclick = () => {
        test3();
    };
}
addButtonListeners();
//handle app form submit
document.getElementById("extension-form").onsubmit = (event) => __awaiter(this, void 0, void 0, function* () {
    event.preventDefault();
    // Get the current selected Element
    const el = yield webflow.getSelectedElement();
    //button listeners
});
//////////////////////////
// Tests
// create reference variable via js variable
const test1 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Get Collection
        const collection = yield webflow.getDefaultVariableCollection();
        // Create first variable
        const firstVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createColorVariable("Test 1 Color", "red"));
        // create second variable referencing the first
        if (firstVariable) {
            // Create second variable as an reference of the first
            const secondVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createColorVariable("Test 1 Reference", firstVariable));
            console.log("test 1: ", secondVariable);
        }
    });
};
const test2 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        //Get the collection of the current Webflow Variables
        const collection = yield webflow.getDefaultVariableCollection();
        // Create first variable
        const firstVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createColorVariable("Test 2 - Color", "red"));
        //find the first variable
        const referenceVariable = yield (collection === null || collection === void 0 ? void 0 : collection.getVariableByName("Test 2 - Color"));
        if (referenceVariable && referenceVariable.type === "Color") {
            // Create second variable as an reference of the first
            const secondVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createColorVariable("Test 2 - Reference", referenceVariable));
            console.log("test 2: ", secondVariable);
        }
    });
};
//create js variable via get varialbey by name
const test3 = function () {
    return __awaiter(this, void 0, void 0, function* () {
        //Get the collection of the current Webflow Variables
        const collection = yield webflow.getDefaultVariableCollection();
        // Create first variable
        const firstVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createColorVariable("test/color", "red"));
        //find the first variable
        const referenceVariable = yield (collection === null || collection === void 0 ? void 0 : collection.getVariableByName("test/color"));
        //if reference variable exists and has the same type
        if (referenceVariable && referenceVariable.type === "Color") {
            // Create second variable as an reference of the first
            const secondVariable = yield (collection === null || collection === void 0 ? void 0 : collection.createColorVariable("Test 3/Reference", referenceVariable));
        }
    });
};
/*
const clientFirstVariablesV1 = [
  /////////////////
  // Adaptive Sizes
  { type: "Size", name: "size/0rem", value: 0, unit: "rem" },
  { type: "Size", name: "size/0.125rem", value: 0.125, unit: "rem" },
  { type: "Size", name: "size/0.25rem", value: 0.25, unit: "rem" },
  { type: "Size", name: "size/0.5rem", value: 0.5, unit: "rem" },
  { type: "Size", name: "size/.75rem", value: 0.75, unit: "rem" },
  { type: "Size", name: "size/1rem", value: 1, unit: "rem" },
  { type: "Size", name: "size/1.25rem", value: 1.25, unit: "rem" },
  { type: "Size", name: "size/1.5rem", value: 1.5, unit: "rem" },
  { type: "Size", name: "size/1.75rem", value: 1.75, unit: "rem" },
  { type: "Size", name: "size/2rem", value: 2, unit: "rem" },
  { type: "Size", name: "size/2.5rem", value: 2.5, unit: "rem" },
  { type: "Size", name: "size/3rem", value: 3, unit: "rem" },
  { type: "Size", name: "size/3.5rem", value: 3.5, unit: "rem" },
  { type: "Size", name: "size/4rem", value: 4, unit: "rem" },
  { type: "Size", name: "size/4.5rem", value: 4.5, unit: "rem" },
  { type: "Size", name: "size/5rem", value: 5, unit: "rem" },
  { type: "Size", name: "size/5.5rem", value: 5.5, unit: "rem" },
  { type: "Size", name: "size/6rem", value: 6, unit: "rem" },
  { type: "Size", name: "size/6.5rem", value: 6.5, unit: "rem" },
  { type: "Size", name: "size/7rem", value: 7, unit: "rem" },
  { type: "Size", name: "size/7.5rem", value: 7.5, unit: "rem" },
  { type: "Size", name: "size/8rem", value: 8, unit: "rem" },
  { type: "Size", name: "size/8.5rem", value: 8.5, unit: "rem" },
  { type: "Size", name: "size/9rem", value: 9, unit: "rem" },
  { type: "Size", name: "size/9.5rem", value: 9.5, unit: "rem" },
  { type: "Size", name: "size/10rem", value: 10, unit: "rem" },
  { type: "Size", name: "size/11rem", value: 11, unit: "rem" },
  { type: "Size", name: "size/12rem", value: 12, unit: "rem" },
  { type: "Size", name: "size/13rem", value: 13, unit: "rem" },
  { type: "Size", name: "size/14rem", value: 14, unit: "rem" },
  { type: "Size", name: "size/15rem", value: 15, unit: "rem" },
  { type: "Size", name: "size/16rem", value: 16, unit: "rem" },
  // Page Structure
  { type: "Size", name: "..padding/horizontal", value: 5, unit: "vw" },
  { type: "Size", name: "..padding/section large", value: 9, unit: "rem" },
  { type: "Size", name: "..padding/section main", value: 6, unit: "rem" },
  { type: "Size", name: "..padding/section small", value: 3, unit: "rem" },
  { type: "Size", name: "..max width/large", value: 96, unit: "rem" },
  { type: "Size", name: "..max width/main", value: 80, unit: "rem" },
  { type: "Size", name: "..max width/small", value: 64, unit: "rem" },
  // Border Width
  { type: "Size", name: "..border width/main", value: 1, unit: "px" },
  // Border Radius
  { type: "Size", name: "..border radius/xsmall", value: 0.5, unit: "rem" },
  { type: "Size", name: "..border radius/small", value: 1, unit: "rem" },
  { type: "Size", name: "..border radius/medium", value: 2, unit: "rem" },
  { type: "Size", name: "..border radius/large", value: 4, unit: "rem" },
  { type: "Size", name: "..border radius/rounded", value: 100, unit: "vw" },
  { type: "Size", name: "..border radius/image", value: 4, unit: "rem" },
  // Typography Desktop
  { type: "Size", name: ".font size/h1", value: 5, unit: "rem" },
  { type: "Size", name: ".font size/h2", value: 4, unit: "rem" },
  { type: "Size", name: ".font size/h3", value: 3.5, unit: "rem" },
  { type: "Size", name: ".font size/h4", value: 3, unit: "rem" },
  { type: "Size", name: ".font size/h5", value: 2, unit: "rem" },
  { type: "Size", name: ".font size/h6", value: 1.5, unit: "rem" },
  // Typography Tablet
  { type: "Size", name: ".font size/md/h1", value: 5, unit: "rem" },
  { type: "Size", name: ".font size/md/h2", value: 4, unit: "rem" },
  { type: "Size", name: ".font size/md/h3", value: 3.5, unit: "rem" },
  { type: "Size", name: ".font size/md/h4", value: 3, unit: "rem" },
  { type: "Size", name: ".font size/md/h5", value: 2, unit: "rem" },
  { type: "Size", name: ".font size/md/h6", value: 1.5, unit: "rem" },
  // Typography Mobile Landcape
  { type: "Size", name: ".font size/sm/h1", value: 5, unit: "rem" },
  { type: "Size", name: ".font size/sm/h2", value: 4, unit: "rem" },
  { type: "Size", name: ".font size/sm/h3", value: 3.5, unit: "rem" },
  { type: "Size", name: ".font size/sm/h4", value: 3, unit: "rem" },
  { type: "Size", name: ".font size/sm/h5", value: 2, unit: "rem" },
  { type: "Size", name: ".font size/sm/h6", value: 1.5, unit: "rem" },
  // Typography Mobile Portrait
  { type: "Size", name: ".font size/xs/h1", value: 5, unit: "rem" },
  { type: "Size", name: ".font size/xs/h2", value: 4, unit: "rem" },
  { type: "Size", name: ".font size/xs/h3", value: 3.5, unit: "rem" },
  { type: "Size", name: ".font size/xs/h4", value: 3, unit: "rem" },
  { type: "Size", name: ".font size/xs/h5", value: 2, unit: "rem" },
  { type: "Size", name: ".font size/xs/h6", value: 1.5, unit: "rem" },
  /////////////////
  // Semantic Colors
  { type: "Color", name: "...color/background primary", value: "#ffffff" },
  { type: "Color", name: "...color/background secondary", value: "#ffffff" },
  { type: "Color", name: "...color/background accent", value: "#ffffff" },
  { type: "Color", name: "...color/background alternate", value: "#ffffff" },
  { type: "Color", name: "...color/text primary", value: "#ffffff" },
  { type: "Color", name: "...color/text secondary", value: "#ffffff" },
  { type: "Color", name: "...color/text accent", value: "#ffffff" },
  { type: "Color", name: "...color/text alternate", value: "#ffffff" },
  { type: "Color", name: "...color/border primary", value: "#ffffff" },
  { type: "Color", name: "...color/border secondary", value: "#ffffff" },
  { type: "Color", name: "...color/border accent", value: "#ffffff" },
  { type: "Color", name: "...color/border alternate", value: "#ffffff" },
  // Base Colors
  { type: "Color", name: "...swatch/dark 1", value: "#ffffff" },
  { type: "Color", name: "...swatch/dark 2", value: "#272525" },
  { type: "Color", name: "...swatch/dark 3", value: "#5d5c5c" },
  { type: "Color", name: "...swatch/light 1", value: "#ffffff" },
  { type: "Color", name: "...swatch/light 2", value: "#f4f4f4" },
  { type: "Color", name: "...swatch/light 3", value: "#cfcfcf" },
  /////////////////
  // Fonts
  { type: "FontFamily", name: "font family/primary", value: "system-ui" },
  { type: "FontFamily", name: "font family/secondary", value: "Arial" },
];
*/
