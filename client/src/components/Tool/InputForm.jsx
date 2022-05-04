import { useForm } from "react-hook-form";
import { FormErrorMessage, Heading, FormLabel, FormControl, Input, Button, Container, Divider } from "@chakra-ui/react";
import { useState } from "react";

export default function InputForm(props) {
  let [generatedResponse, setGeneratedResponse] = useState("");
//   let [result, setResult] = useState("");

//   console.log(result)

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

//   const userInputItinerary = "";

  async function onSubmit(values) {
    let str = "";
    Object.values(values).forEach((value, index) => {
      switch (index) {
        case 0:
          str += `On this tour, we'll ${value}`;
          break;
        case 1:
          str += `\n We'll meet at ${value}`;

          break;
        case 2:
          str += `\n We'll start by ${value}`;

          break;
        case 3:
          str += `\n Then we'll ${value}`;

          break;
        case 4:
          str += `\n And finally, we'll ${value}`;

          break;
        case 5:
          str += `\n We'll end at ${value}`;
          break;
        default:
          console.log("string not found");
      }
    });

    props.setResult(JSON.stringify(str));
    // setResult(str);

    // event.preventDefault(); <-- Already happens under the hood with hook-form

    // const params = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ itinerary: userInputItinerary }),
    // };

    // const response = await fetch("http://localhost:5005/api/generate", params);

    // const data = await response.json();

    // setResult(data.result);
  }

  //   function onSubmit(values) {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         alert(JSON.stringify(values, null, 2));
  //         resolve();
  //       }, 3000);
  //     });
  //   }

  //   function onSubmit(values) {
  //     return console.log(values);
  //   }

  return (
    <Container w="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name} borderRight="1px" borderColor="gray.200">
          <Heading py={2} size="md">
            Experience Summary
          </Heading>
          <FormLabel py={2}>On this tour, we'll...</FormLabel>
          <Input py={2} {...register("summary")} placeholder="Explore New York's traditional Italian food scene." />
          <FormLabel py={2}>We'll meet at...</FormLabel>
          <Input py={2} {...register("meetingPoint")} placeholder="42 Wallaby Way, Sydney" />
          <FormLabel py={2}>We'll start by...</FormLabel>
          <Input py={2} {...register("firstHighlight")} placeholder="Exploring my favourite local neighbourhood and trying arancini" />
          <FormLabel py={2}>Then we'll...</FormLabel>
          <Input py={2} {...register("secondHighlight")} placeholder="Learn how to make handmade pasta from a local Italian nonna" />
          <FormLabel py={2}>And finally, we'll...</FormLabel>
          <Input py={2} {...register("thirdHighlight")} placeholder="Enjoy some delicious Tiramisu" />
          <FormLabel py={2}>We'll end at...</FormLabel>
          <Input py={2} {...register("endingPoint")} placeholder="7 Yemen Road, Yemen." />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
      {/* <div className="">{result}</div> */}
    </Container>
  );
}
