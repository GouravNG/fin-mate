import HeroCard from "../HeroCards"

export const Home = () => {
  return (
    <>
      <HeroCard
        totalBalance={51000.0}
        trendPercent={2.4}
        categories={[
          {
            categoryName: "Shopping",
            categoryImgSrc: "https://github.com/shadcn.png",
          },
          {
            categoryName: "Shopping",
            categoryImgSrc: "https://github.com/shadcn.png",
          },
          {
            categoryName: "Shopping",
            categoryImgSrc: "https://github.com/shadcn.png",
          },
        ]}
      />
    </>
  )
}
