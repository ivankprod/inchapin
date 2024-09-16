"use client";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, TextField } from "@shared/ui/elements";
import { phoneNumber } from "@shared/utils/validation";
import type { TCallbackForm } from "@types";

import styles from "./CallbackForm.module.scss";

const initialValues: TCallbackForm = {
	name: "",
	phone: "",
	email: ""
};

const valuesTitles: TCallbackForm = {
	name: "Имя",
	phone: "Телефон",
	email: "E-mail"
};

type TDataIndex = keyof TCallbackForm;

/** @public */
export const CallbackForm: React.FC = () => {
	Yup.addMethod(Yup.string, "phoneNumber", phoneNumber);

	const validationSchema = Yup.object({
		name: Yup.string().required("Обязательное поле"),
		email: Yup.string()
			.required("Обязательное поле")
			.email("Email указан неверно"),
		phone: Yup.string()
			.test("test-required-phone", "Обязательное поле", function (value) {
				const { path, createError } = this;

				return (
					(value && value != "" && value != "+7 (___) ___-__-__") ||
					createError({ path, message: "Обязательное поле" })
				);
			})
			.phoneNumber("Номер телефона указан неверно")
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		validateOnBlur: true,
		validateOnChange: true,
		onSubmit: (values) => {
			console.log(values);
		}
	});

	return (
		<form className={styles.form} onSubmit={formik.handleSubmit}>
			<h1 className={styles.caption}>Заказать звонок</h1>
			<fieldset>
				{Object.keys(initialValues).map((field) => (
					<TextField
						key={field}
						name={field}
						type={field == "phone" ? "tel" : undefined}
						value={formik.values[field as TDataIndex]}
						placeholder={valuesTitles[field as TDataIndex]}
						onChange={formik.handleChange}
						onFocus={() => {
							if (field == "phone" && formik.values.phone === "")
								formik.setFieldValue(
									"phone",
									"+7 (___) ___-__-__"
								);
						}}
						onBlur={(e) => {
							if (formik.values.phone === "+7 (___) ___-__-__")
								formik.setFieldValue("phone", "");

							formik.handleBlur(e);
						}}
						errorMessage={formik.errors[field as TDataIndex]}
						wrapperClassName={styles.fieldWrapper}
					/>
				))}
			</fieldset>
			<p className={styles.policy}>
				Нажимая на кнопку «Отправить», вы ознакомлены
				<br /> и подтверждаете согласие с{" "}
				<Link href="#">политикой обработки персональных данных</Link>
			</p>
			<Button submit className={styles.submit}>
				Отправить
			</Button>
		</form>
	);
};

/** @alias */
export default CallbackForm;
