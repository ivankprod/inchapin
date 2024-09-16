import * as Yup from "yup";

const phoneRegex = /\+\d\s\(\d{3}\)\s\d{3}\-\d{2}-\d{2}/;

/** @public */
export function phoneNumber(this: Yup.StringSchema, errorMessage: string) {
	return this.test(`test-phone-number`, errorMessage, function (value) {
		const { path, createError } = this;

		return (
			(value && phoneRegex.test(value)) ||
			createError({ path, message: errorMessage })
		);
	});
}
