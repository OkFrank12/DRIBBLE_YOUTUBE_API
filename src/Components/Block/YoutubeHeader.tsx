import React from "react";
import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";
import styled from "styled-components";
import youTube from "../../Assets/youtube_logo.jpg";
import { BiLike, BiMicrophone } from "react-icons/bi";
import { AiFillHome, AiOutlineAlert, AiOutlineBell, AiOutlineCheckSquare, AiOutlineComment, AiOutlineFolderAdd, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

import {
  MdOndemandVideo,
  MdOutlineOndemandVideo,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { TfiDownload } from "react-icons/tfi";
import { getAllEntries } from "../../Utils/Api";

const YoutubeHeader = () => {
  const [showIt, setShowIt] = React.useState<boolean>(false);

  const onShowIt = () => {
    setShowIt(!showIt);
  };

  const [toggle, setToggle] = React.useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  const data: any = [
    {
      icon: <AiFillHome />,
      txt: "Home",
    },
    {
      icon: <MdOutlineOndemandVideo />,
      txt: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions />,
      txt: "Subscription",
    },
    {
      icon: <MdOutlineVideoLibrary />,
      txt: "Library",
    },
    {
      icon: <RiHistoryLine />,
      txt: "Library",
    },
    {
      icon: <MdOndemandVideo />,
      txt: "Your Videos",
    },
    {
      icon: <BsClockHistory />,
      txt: "Watch Later",
    },
    {
      icon: <TfiDownload />,
      txt: "Download",
    },
    {
      icon: <BiLike />,
      txt: "Liked Videos",
    },
    {
      icon: <AiOutlineAlert />,
      txt: "Reports",
    },
    {
      icon: <AiOutlineCheckSquare />,
      txt: "Remarks",
    },
    {
      icon: <AiOutlineComment />,
      txt: "Comments",
    },
    {
      icon: <AiOutlineHeart />,
      txt: "Favourites",
    },
  ];
  const data1: any = [
    {
      icon: <AiFillHome />,
      txt: "Home",
    },
    {
      icon: <MdOutlineOndemandVideo />,
      txt: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions />,
      txt: "Subscription",
    },
    {
      icon: <MdOutlineVideoLibrary />,
      txt: "Library",
    },
    {
      icon: <RiHistoryLine />,
      txt: "Library",
    },
    {
      icon: <MdOndemandVideo />,
      txt: "Your Videos",
    },
    {
      icon: <BsClockHistory />,
      txt: "Watch Later",
    },
    {
      icon: <TfiDownload />,
      txt: "Download",
    },
    {
      icon: <BiLike />,
      txt: "Liked Videos",
    },
    {
      icon: <AiOutlineAlert />,
      txt: "Reports",
    },
    {
      icon: <AiOutlineCheckSquare />,
      txt: "Remarks",
    },
    {
      icon: <AiOutlineComment />,
      txt: "Comments",
    },
    {
      icon: <AiOutlineHeart />,
      txt: "Favourites",
    },
    {
      icon: <AiOutlineStar />,
      txt: "Starred",
    },
  ];

  const Tabing: any = [
    {
      tabs: "Home",
      bg: "",
      clr: "",
    },
    {
      tabs: "Heavy Weights",
      bg: "silver",
      clr: "3",
    },
    {
      tabs: "Lionel Messi",
      clr: "3",
    },
    {
      tabs: "Music",
      clr: "3",
    },
    {
      tabs: "Manchester City FC.",
      clr: "3",
    },
    {
      tabs: "Mixes",
      clr: "3",
    },
    {
      tabs: "Skills",
      clr: "3",
    },
    {
      tabs: "Jenifa",
      clr: "3",
    },
    {
      tabs: "Kick Boxing",
      clr: "3",
    },
    {
      tabs: "Rugby",
      clr: "3",
    },
    {
      tabs: "Animals",
      clr: "3",
    },
  ];

  const [seeData, setSeeData] = React.useState<{}[]>([]);

  React.useEffect(() => {
    getAllEntries().then((res) => {
      setSeeData(res);
    });
  }, []);
  return (
    <div>
      <Container>
        <Main>
          <LogoHolder>
            <Menu onClick={onToggle} />
            <Logo src={youTube} />
          </LogoHolder>
          <Holder>
            {showIt ? (
              <SearchPanel w="1">
                <Search />
                <Input placeholder="Search" pad="1" />
                <Box>
                  <Search1 />
                </Box>
              </SearchPanel>
            ) : (
              <SearchPanel w="">
                <Input placeholder="Search" onClick={onShowIt} pad="" />
                <Box>
                  <Search1 />
                </Box>
              </SearchPanel>
            )}
            <Microphone />
          </Holder>
          <CalToACtion>
            <CreateVideo />
            <Notification />
            <Index>C</Index>
          </CalToACtion>
        </Main>
      </Container>
      <AlmightyHolde>
        {toggle ? (
          <Container1 w="">
            <Main1>
              {data1.map((el: any) => (
                <Hover fd="" jcc="">
                  {el.icon}
                  <Txt fs="">{el.txt}</Txt>
                </Hover>
              ))}
            </Main1>
          </Container1>
        ) : (
          <Container1 w="70">
            <Main1>
              {data.map((el: any) => (
                <Hover fd="1" jcc="1">
                  {el.icon}
                  <Txt fs="1">{el.txt}</Txt>
                </Hover>
              ))}
            </Main1>
          </Container1>
        )}

        <VideosPanel>
          <HorizontalTab>
            {Tabing.map((el: any) => (
              <Tabs bg={`${el.bg}`} clr={el.clr}>
                {el.tabs}
              </Tabs>
            ))}
          </HorizontalTab>
          <Safety>
            {seeData.map((el: any) => (
              <CardHolder>
                <Card>
                  <VideoHolder>
                    <Video src={el.projectVideo} autoPlay loop controls muted />
                  </VideoHolder>
                  <Image alt="Think like a coder" src={el.projectImage} />
                </Card>
                <Bottom>
                  <Hold>
                    <Img alt="Logo here" src={el.avatar} />
                    <MiniHold>
                      <Text>{el.projectTitle}</Text>
                      <Text1>{el.projectGroup}</Text1>
                      <Text1>{el.viewsDuration}</Text1>
                    </MiniHold>
                  </Hold>
                </Bottom>
              </CardHolder>
            ))}
          </Safety>
        </VideosPanel>
      </AlmightyHolde>
    </div>
  );
};

export default YoutubeHeader;

const Safety = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HorizontalTab = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Tabs = styled.div<{
  bg: string;
  clr: string;
}>`
  padding: 10px 15px;
  background-color: ${({ bg }) => (bg ? "#f5f5f5" : "#030303")};
  color: ${({ clr }) => (clr ? "black" : "white")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 400ms;

  :hover {
    background-color: #dad8d8;
  }
`;

const VideoHolder = styled.div`
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MiniHold = styled.div``;

const Hold = styled.div`
  display: flex;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;

const Bottom = styled.div`
  margin-top: 10px;
  cursor: pointer;
`;

const Text = styled.div`
  font-weight: 500;
`;

const Text1 = styled.div`
  font-size: 14px;
  color: grey;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const CardHolder = styled.div`
  width: 30%;
  height: 300px;
  margin: 15px 15px;

  :hover {
    ${Image} {
      display: none;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
  border-radius: 15px;
  object-fit: cover;
  position: relative;
  cursor: pointer;
`;

const VideosPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AlmightyHolde = styled.div`
  display: flex;
  margin-top: 70px;
`;

const Hover = styled.div<{
  fd: string;
  jcc: string;
}>`
  padding: 20px 30px;
  transition: all 400ms;
  cursor: pointer;
  display: flex;
  justify-content: ${({ jcc }) => (jcc ? "center" : "space-between")};
  align-items: center;
  flex-direction: ${({ fd }) => (fd ? "column" : "row")};
  border-radius: 10px;
  font-size: 20px;

  :hover {
    background-color: #d3d0d0;
  }
`;
const Txt = styled.div<{
  fs: string;
}>`
  font-size: ${({ fs }) => (fs ? "10px" : "17px")};
  font-weight: 500;
`;

const Container1 = styled.div<{
  w: string;
}>`
  width: ${({ w }) => (w ? "70px" : "200px")};
  height: calc(100vh - 70px);
  display: flex;

  justify-content: center;

  align-items: center;
  transition: all 400ms;
`;

const Main1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Holder = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
`;

const LogoHolder = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  z-index: 400000;
  background-color: white;
`;

const Main = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled(HiOutlineMenu)`
  padding: 15px;
  border-radius: 50%;
  font-size: 25px;

  :hover {
    background-color: #f1f1f1;
  }
`;

const Logo = styled.img``;

const SearchPanel = styled.div<{
  w: string;
}>`
  width: ${({ w }) => (w ? "50%" : "45%")};
  height: 40px;
  border-radius: 30px;
  border: 1px solid grey;
  transition: all 350ms;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Search = styled(HiOutlineSearch)`
  margin-left: 10px;
  font-size: 25px;
  position: absolute;
  left: 5px;
`;

const Search1 = styled(HiOutlineSearch)`
  font-size: 25px;
`;

const Input = styled.input<{
  pad: string;
}>`
  flex: 1;
  height: 95%;
  border-radius: 30px 0 0 30px;
  padding-left: ${({ pad }) => (pad ? "45px" : "15px")};
  font-size: 20px;
  color: grey;
  border: 0;

  :focus {
    outline: 1px solid blue;
    border: 1px solid blue;
  }
`;

const Box = styled.div`
  height: 100%;
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 0 30px 30px 0;

  :hover {
    background-color: #dbdbdb;
  }
`;

const CalToACtion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;

const CreateVideo = styled(AiOutlineFolderAdd)`
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  transition: all 400ms;

  :hover {
    background-color: #f1f1f1;
  }
`;

const Microphone = styled(BiMicrophone)`
  padding: 15px;
  border-radius: 50%;
  margin-left: 10px;
  transition: all 400ms;
  cursor: pointer;
  font-size: 20px;

  :hover {
    background-color: #f1f1f1;
  }
`;

const Notification = styled(AiOutlineBell)`
  padding: 15px;
  border-radius: 50%;
  font-size: 20px;
  transition: all 400ms;
  cursor: pointer;
  :hover {
    background-color: #f1f1f1;
  }
`;

const Index = styled.div`
  background-color: darkorange;
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;
