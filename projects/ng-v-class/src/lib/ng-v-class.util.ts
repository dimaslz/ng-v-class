import isArray from "lodash.isarray";

import { ClassAsArray, NgVClass } from './ng-v-class.types';

const fix = (ngVClass: NgVClass = ""): Array<NgVClass> => {
	const classStr = [];
	const vC = ngVClass;

	if (typeof vC === "string") {
		classStr.push(vC);
	} else if (isArray(vC)) {
		(vC as ClassAsArray).forEach((item) => {
			classStr.push(fix(item).join(" "));
		});
	} else if (!isArray(vC) && typeof vC === "object") {
		Object.entries(vC)
			.filter(([, v]) => v)
			.map(([k]) => k)
			.forEach((item) => {
				classStr.push(item);
			});
	}

	return classStr;
};

export const fixClass = (ngVClass: NgVClass): string => fix(ngVClass).join(" ").trim();