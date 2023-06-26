import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  const data: any = [
    {
      txt: "Discover",
    },
    {
      txt: "Animation",
    },
    {
      txt: "Branding",
    },
    {
      txt: "Illustration",
    },
    {
      txt: "Mobile",
    },
    {
      txt: "Print",
    },
    {
      txt: "Product Design",
    },
    {
      txt: "Typography",
    },
    {
      txt: "Web Design",
    },
  ];

  const mapper: any = [
    {
      txts: "landing page",
    },
    {
      txts: "ios",
    },
    {
      txts: "food",
    },
    {
      txts: "landingpage",
    },
    {
      txts: "uxdesign",
    },
    {
      txts: "app design",
    },
  ];
  return (
    <div>
      <Container>
        <Video
          src="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985"
          muted
          autoPlay
          loop
        />
        <Cover>
          <Main>
            <Holder>
              {data.map((el: any) => (
                <Box pad="15px">{el.txt}</Box>
              ))}
            </Holder>
            <BigText>Explore the world’s leading design portfolios</BigText>
            <SmallText>
              Millions of designers and agencies around the world showcase their
              portfolio work on Dribbble - the home to the world’s best design
              and creative professionals.
            </SmallText>
            <InputHolder>
              <Search />
              <Input placeholder="Search..." />
            </InputHolder>
            <TrendsPanel>
              <Text>Trending Searches</Text>
              {mapper.map((el: any) => (
                <Box1>{el.txts}</Box1>
              ))}
            </TrendsPanel>
          </Main>
        </Cover>
      </Container>
    </div>
  );
};

export default Hero;

const Box1 = styled.div`
  border: 1px solid grey;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 350ms;
  margin: 0 10px;

  :hover {
    border: 1px solid white;
  }
`;

const TrendsPanel = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div``;

const Cover = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  text-align: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const BigText = styled.div`
  font-size: 40px;
  font-weight: 700;
  width: 600px;
  margin: 30px 0;
`;

const SmallText = styled.div`
  width: 700px;
`;

const InputHolder = styled.div`
  background-color: white;
  height: 25px;
  width: 600px;
  padding: 20px;
  border-radius: 30px;
  display: flex;
  margin: 30px 0;
  align-items: center;
`;

const Search = styled(BiSearch)`
  color: grey;
  font-size: 20px;
`;

const Input = styled.input`
  width: 90%;
  height: 100%;
  border: 0;
  outline: 0;
  font-size: 16px;
  padding-left: 10px;
`;

const Holder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div<{
  pad: string;
}>`
  padding: ${({ pad }) => pad};
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-weight: 500;
  display: flex;
  color: white;
  font-size: 18px;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  text-align: center;
  flex-direction: column;
`;
