import * as yup from "yup";

export const formCreateReviewValidation = yup.object({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .typeError("Rating must be a number")
    .min(0, "The minimum is 0")
    .max(100, "The maximum is 100")
    .required("Rating is required")
    .test("is-number", "Invalid number", (value) => !isNaN(value)),
  review: yup.string(),
});
