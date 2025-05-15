
import { Htag } from "@/components";
import { Button } from "@/components/Button/Button";
import { P } from "@/components/P/P";
import { Tag } from "@/components/Tag/Tag";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Hello world! Привет мир!</Htag>
      <Htag tag="h2">Hello world! Привет мир!</Htag>
      <Htag tag="h3">Hello world! Привет мир!</Htag>

      <Button appirance="primary" arrow="right">Просмотреть</Button>
      <Button appirance="ghost" arrow="down">Просмотреть</Button>

      <P size="s" className="bordered">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.</P>
      <P size="m">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.</P>
      <P size="l">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.</P>

      <Tag>скидка 10%</Tag>
      <Tag size="m" color="primary">скидка 10%</Tag>
      <Tag size="s" color="red" href="https://google.com">скидка 10%</Tag>
      <Tag size="s" color="green">скидка 10%</Tag>
      <Tag size="m" color="grey">скидка 10%</Tag>

    </div>
  );
}
