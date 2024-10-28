import { Avatar, Card, Col, Image, Popover, Row, Typography } from "antd";
import "./page.scss";
import { ArrowRightOutlined, BulbOutlined } from "@ant-design/icons";
import { Bar, Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const { Text, Link } = Typography;

const App = () => {
  const getDashboard = [
    {
      id: 1,
      image: "/images/Tier1.png",
      tier: "Tier 1",
      f0: "5%",
      f1: "35%",
      f2: "10%",
      rate: 0,
    },
    {
      id: 2,
      image: "/images/Tier2.png",
      tier: "Tier 2",
      f0: "5%",
      f1: "35%",
      f2: "10%",
      rate: 15,
    },
    {
      id: 3,
      image: "/images/Tier3.png",
      tier: "Tier 3",
      f0: "5%",
      f1: "35%",
      f2: "10%",
      rate: 35,
    },
    {
      id: 4,
      image: "/images/Tier4.png",
      tier: "Tier 4",
      f0: "5%",
      f1: "35%",
      f2: "10%",
      rate: 65,
    },
    {
      id: 5,
      image: "/images/Tier5.png",
      tier: "Tier 5",
      f0: "5%",
      f1: "35%",
      f2: "10%",
      rate: 105,
    },
    {
      id: 6,
      image: "/images/Tier6.png",
      tier: "Tier 6",
      f0: "5%",
      f1: "35%",
      f2: "10%",
      rate: 155,
    },
  ];

  const labelsLine = getDashboard.map((item) => ({
    image: item.image,
    tier: item.tier,
    rate: item.rate,
    f0: item.f0,
    f1: item.f1,
    f2: item.f2,
  }));

  const dataLine = {
    labels: labelsLine?.map((item) => item.tier),
    datasets: [
      {
        fill: true,
        label: "Rating",
        data: labelsLine?.map((item) => item.rate),
        borderColor: "rgba(38, 79, 149, 0.8 )",
        backgroundColor: "rgba(38, 79, 149, 0.8)",
        pointRadius: 0, // Tắt chấm tròn trên biểu đồ
        pointHoverRadius: 8, // Kích thước chấm tròn khi hover
        pointHoverBackgroundColor: "rgba(53, 162, 235, 1)", // Màu chấm tròn khi hover
        pointHoverBorderWidth: 0, // Loại bỏ viền xung quanh điểm hover
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "white",
        },
      },
      tooltip: {
        backgroundColor: "rgba(53, 162, 235, 0.9)", // Màu nền tooltip
        titleColor: "#ffffff", // Màu tiêu đề tooltip
        bodyColor: "#ffffff", // Màu nội dung tooltip
        cornerRadius: 8, // Góc bo tròn cho tooltip
        padding: 10,
        displayColors: false, // Tắt hiển thị màu mẫu trong tooltip
        callbacks: {
          label: function (tooltipItem: any) {
            const index = tooltipItem.dataIndex;
            const item = labelsLine[index];
            return [
              `F0 (Rebate): ${item.f0}`,
              `F1 (Commission): ${item.f1}`,
              `F2  (Commission): ${item.f2}`,
            ];
          },
        },
      },
      title: {
        display: false,
        text: "",
      },
    },
  };

  const features = [
    {
      icon: <Image preview={false} sizes="100%" src="/images/Frame 1.png" />,
      title: "Two-Level Referral System",
      description:
        "Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)",
    },
    {
      icon: <Image preview={false} sizes="100%" src="/images/Frame 2.png" />,
      title: "Earn Rebates & Commissions",
      description:
        "Earn rebates on your trades and commissions from F1 and F2.",
    },
    {
      icon: <Image preview={false} sizes="100%" src="/images/Frame 3.png" />,
      title: "Claim Daily Rewards",
      description:
        "Rewards are credited after trades close and claimable daily at 0:00 UTC.",
    },
    {
      icon: <Image preview={false} sizes="100%" src="/images/Frame 4.png" />,
      title: "Referral Tier System",
      description:
        "Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days",
    },
  ];
  return (
    <div className="wrapper-app">
      <Row className="wrapper-home-page-banner">
        <Col
          className="wrapper-home-page-banner-left"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <h1 className="wrapper-home-page-banner-left-header">
            Unlock Rewards with the Copin Referral Program
          </h1>
          <p className="wrapper-home-page-banner-left-des">
            Earn rebates and commissions by inviting friends. <br />
            Grow your network and benefit from our 6-tier reward system.
          </p>
          <Link className="wrapper-home-page-banner-left-btn" href="#">
            View referral Ranking <ArrowRightOutlined />
          </Link>
        </Col>
        <Col
          className="wrapper-home-page-banner-right"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <Card className="wrapper-home-page-banner-right-line">
            <Line data={dataLine} options={optionsLine} />
          </Card>
        </Col>
      </Row>
      <div className="wrapper-home-page-content">
        <div className="wrapper-home-page-content-header">
          <Image preview={false} sizes="100%" src="/images/Lightbulb.png" />
          How It Works?
        </div>
        <Row
          gutter={[16, 16]}
          justify="center"
          className="wrapper-home-page-content-items"
        >
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} md={6} className="values-col">
              <div className="values-card">
                {feature.icon}
                <h3>
                  {index + 1}. {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="footer">
        <div className="content">
          Apply <span className="content-gradient">Copin Affilate Program</span>{" "}
          to get more benefits!
        </div>
        <a className="contact-text" href="#">
          Contact us <ArrowRightOutlined />
        </a>
      </div>
    </div>
  );
};

export default App;
