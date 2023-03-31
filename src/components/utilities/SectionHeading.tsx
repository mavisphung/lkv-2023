import { Text, createStyles } from "@mantine/core";

type SectionHeadingParams = {
  isCenter: boolean;
  content: string;
};

const SectionHeading = (props: SectionHeadingParams) => {
  const { isCenter, content } = props;

  return (
    <Text
      sx={(theme) => ({
        [theme.fn.largerThan("lg")]: {
          fontSize: "1.75rem",
        },
        [theme.fn.largerThan("md")]: {
          fontSize: "1.25rem",
        },
        [theme.fn.largerThan("sm")]: {
          fontSize: "1.5rem",
        },
        marginBottom: "1rem",
        fontSize: "1.25rem"
      })}
      ta={isCenter ? "center" : undefined}
      fw="bold"
      component="h2"
    >
      {content}
    </Text>
  );
};

export default SectionHeading;
