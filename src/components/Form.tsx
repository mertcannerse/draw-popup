import React from "react";
import { useFormik } from "formik";
import SubmitButton from "./SubmitButton";
import Questions from "./Questions";

interface IFormProps {
  nameSurname?: string;
  email?: string;
  telNo?: string;
  companyName?: string;
  website?: string;
  numberofEmployees?: string;
  commercialActivities?: string;
  softwareDeveloper?: string;
  usedFarktorBefore?: string;
}

const Form: React.FC<IFormProps> = () => {
  const formik = useFormik({
    initialValues: {
      nameSurname: "",
      email: "",
      telNo: "",
      companyName: "",
      website: "",
      numberofEmployees: "",
      commercialActivities: "",
      softwareDeveloper: "",
      usedFarktorBefore: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(JSON.stringify(formik.values, null, 2));
      }}
    >
      <Questions
        formik={formik}
        questionsText={"Ticari faaliyetleriniz nedir?"}
        name={"commercialActivities"}
        options={[
          { value: "BT Çözüm Entegratörü" },
          { value: "CRM/Satiş Uzmanı" },
          { value: "Muhasebe Uzmanı" },
          { value: "Muhasebe Firmaları" },
          { value: "Lojistik Uzmanı" },
          { value: "Diğer/Genel İşletme Uzmanı" },
        ]}
      />

      <Questions
        formik={formik}
        questionsText={"Yazılım Geliştiriciniz Var Mı?"}
        name={"softwareDeveloper"}
        options={[{ value: "Evet" }, { value: "Hayır" }]}
      />

      <Questions
        formik={formik}
        questionsText={"Farktörü daha önce kullandınız mı?"}
        name="usedFarktorBefore"
        options={[{ value: "Evet" }, { value: "Hayır" }]}
      />

      <SubmitButton />
    </form>
  );
};

export default Form;
