import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AiFillFolderAdd,
  AiOutlineHeart,
  AiFillEye,
  AiFillHeart,
} from "react-icons/ai";
import { getAllEntries } from "../../Utils/fApi";

const CardPanel = () => {
  const [viewData, setViewData] = useState<{}[]>([]);

  useEffect(() => {
    getAllEntries().then((res: any) => {
      setViewData(res);
    });
  }, []);

  console.log(viewData);
  return (
    <div>
      <Container>
        <Main>
          {viewData?.map((el: any) => (
            <CardHolder>
              <Card>
                <VideoHolder>
                  {
                    el.projectVideo.split(".")[3] === "mp4" ? <Video src={el.projectVideo} muted autoPlay loop /> : <Image src={el.projectImage} />}
                  <LinearGradient>
                    <Texts>{el.projectName}</Texts>
                    <IconHolder>
                      <Icon />
                      <Icon1 />
                    </IconHolder>
                  </LinearGradient>
                </VideoHolder>
                <Image src={el.projectImage} />
              </Card>
              <Bottom>
                <CardDisplay>
                  <HoverBox>
                    <Profile>
                      <AvatarBig src={el.avatar} />
                      <Tips>{el.category}</Tips>
                      <TextHold>
                        <Name>{el.name}</Name>
                        <Location>{el.location}</Location>
                      </TextHold>
                      <Btn>+Follow</Btn>
                    </Profile>
                    <BoxHolder>
                      <Box1 src={el.image1} />
                      <Box1 src={el.image2} />
                      <Box1 src={el.image3} />
                    </BoxHolder>
                    <THold>
                      <Teams>Teams: </Teams>
                      <Poly src="https://cdn.dribbble.com/users/998507/avatars/mini/2cd4fb4d58c6bfff86c06d7d0e787985.jpg?1591090373" />
                    </THold>
                  </HoverBox>
                    <Box />
                  <Avatar src={el.avatar} />
                  <Name>{el.name}</Name>
                </CardDisplay>
                <Tip>{el.category}</Tip>
                <Heart />
                <Text>{el.like}</Text>
                <Eye />
                <Text>{el.view}</Text>
              </Bottom>
            </CardHolder>
          ))}
        </Main>
      </Container>
    </div>
  );
};

export default CardPanel;

const THold = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Teams = styled.div``;

const Poly = styled.img`
  border-radius: 50%;
  margin-left: 10px;
`;

const BoxHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`;

const Box1 = styled.img`
  width: 120px;
  height: 80px;
  border-radius: 6px;
  background-color: pink;
`;

const TextHold = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const Location = styled.div`
  color: grey;
`;

const Btn = styled.div`
  padding: 10px;
  background-color: #e6e3e3;
  border-radius: 7px;
  font-weight: 500;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const AvatarBig = styled.img`
  width: 50px;
  position: relative;
  height: 50px;
  border-radius: 50%;
`;

const Tips = styled.div`
  font-size: 12px;
  background-color: silver;
  display: flex;
  justify-content: center;
  padding: 1px 2px;
  color: white;
  border-radius: 3px;
  text-transform: uppercase;
  width: 35px;
  position: absolute;
  top: 50px;
  left: 15px;
  cursor: pointer;

  :hover {
    background-color: #ea4c89;
  }
`;

const HoverBox = styled.div`
  width: 390px;
  height: 190px;
  padding: 8px;
  top: -220px;
  background-color: whitesmoke;
  border-radius: 10px;
  flex-wrap: wrap;
  position: absolute;
  z-index: 152;
  transition: all 600ms;
  display: none;
  flex-direction: column;
`;

const Box = styled.div`
  width: 15px;
  height: 15px;
  background-color: whitesmoke;
  rotate: calc(45deg);
  position: absolute;
  bottom: 35px;
  left: 10px;
  display: none;
`;

const CardDisplay = styled.div`
  display: flex;
  position: relative;
  transition: all 600ms;

  :hover ${HoverBox} {
    display: flex;
  }

  :hover ${Box} {
    display: flex;
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  object-fit: cover;
`;

const Name = styled.div`
  font-weight: 500;
`;

const Tip = styled.div`
  font-size: 12px;
  background-color: silver;
  padding: 1px 2px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    background-color: #ea4c89;
  }
`;

const Heart = styled(AiFillHeart)`
  color: silver;
  :hover {
    color: #ea4c89;
  }
`;

const Text = styled.div``;

const Eye = styled(AiFillEye)`
  color: silver;
  :hover {
    color: #ea4c89;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    opacity: 0;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const LinearGradient = styled.div`
  width: 100%;
  height: 80px;
  background: rgba(247, 244, 244, 0);
  background: linear-gradient(0deg, #585454 0%, rgba(249, 249, 249, 0.1) 100%);
  position: absolute;
  bottom: 0;
  color: white;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  transition: all 350ms;
  padding-bottom: 0;

  :hover {
    opacity: 1;
  }
`;

const Texts = styled.div`
  margin-left: 10px;
`;

const IconHolder = styled.div`
  display: flex;
  margin-right: 20px;
`;

const Icon = styled(AiFillFolderAdd)`
  padding: 8px;
  background-color: white;
  color: grey;
  font-size: 20px;
  border-radius: 5px;
  margin: 0 10px;
`;

const Icon1 = styled(AiOutlineHeart)`
  padding: 8px;
  background-color: white;
  color: grey;
  font-size: 20px;
  border-radius: 5px;
`;

const VideoHolder = styled.div`
  width: 300px;
  height: 235px;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const Main = styled.div`
  width: 94%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const CardHolder = styled.div`
  width: 290px;
  height: 275px;
  margin: 15px 10px;
`;

const Card = styled.div`
  width: 100%;
  height: 235px;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  :hover${LinearGradient} {
    opacity: 1;
  }
`;

// const
