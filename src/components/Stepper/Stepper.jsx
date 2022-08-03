//Stepper implementation - different actions at different steps.
import { Children, useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Checkbox,
  Button,
  Box,
  Step,
  StepLabel,
  Stepper,
  Grid,
  CircularProgress,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { mixed, object, number } from "yup";

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export const StepperContent = () => (
  <Card>
    <CardContent>
      <FormikStepper
        initialValues={{
          firstName: "",
          lastName: "",
          millionaire: false,
          money: 0,
          description: "",
        }}
        onSubmit={async (values) => {
          await sleep(3000);
          console.log("values", values);
        }}
      >
        <FormikStep label="Personal Data">
          <Box paddingBottom={2}>
            <Field
              fullWidth
              name="firstName"
              component={TextField}
              label="First Name"
            />
          </Box>
          <Box paddingBottom={2}>
            <Field
              fullWidth
              name="lastName"
              component={TextField}
              label="Last Name"
            />
          </Box>
          <Box paddingBottom={2}>
            <Field
              name="millionaire"
              type="checkbox"
              component={Checkbox}
              label={{ label: "I am a millionaire" }}
            />
          </Box>
        </FormikStep>
        <FormikStep
          label="Bank Accounts"
          validationSchema={object({
            money: mixed().when("millionaire", {
              is: true,
              then: number()
                .required()
                .min(
                  1_000_000,
                  "Because you said you are a millionaire you need to have 1 million"
                ),
              otherwise: number().required(),
            }),
          })}
        >
          <Box paddingBottom={2}>
            <Field
              fullWidth
              name="money"
              type="number"
              component={TextField}
              label="All the money I have"
            />
          </Box>
        </FormikStep>
        <FormikStep label="More Info">
          <Box paddingBottom={2}>
            <Field
              fullWidth
              name="description"
              component={TextField}
              label="Description"
            />
          </Box>
        </FormikStep>
      </FormikStepper>
    </CardContent>
  </Card>
);

export function FormikStep({ children }) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? "Submitting" : isLastStep() ? "Submit" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
