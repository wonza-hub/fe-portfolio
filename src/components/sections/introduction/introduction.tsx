export default function Introduction() {
  return (
    <div className="tablet:justify-center container mx-auto flex h-full flex-col items-center justify-evenly px-4 py-12">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h1 className="tablet:text-4xl desktop:text-5xl laptop:mb-16 tablet:mb-14 mb-12 text-3xl font-bold tracking-tight after:content-['🖐️']">
          안녕하신가요
        </h1>
        <p className="text-muted-foreground tablet:text-xl laptop:text-2xl text-lg">
          일상의 문제를 소프트웨어적으로 해결하는 것에
          <br />
          흥미를 느끼며 큰 가치를 둡니다.
          <br />
          <br />
          최근에는 친구와 함께
          <br className="desktop:hidden" />
          <span className="desktop:inline hidden">&nbsp;</span>
          교내 중앙 동아리 플랫폼을 기획하고 개발하며
          <br />또 다른 일상의 문제를 해결해 나가는 중입니다.
          <span className="desktop:inline hidden">&nbsp;</span>
          <br />
          <br />
          협업에서 가장 중요한 것은
          <br className="tablet:hidden" />
          <span className="tablet:inline hidden">&nbsp;</span>
          주인의식이라고 생각합니다.
          <br />
          <br />
          주인의식을 가지고 임할 때, 적극적이고 진지하게
          <br />
          서비스의 개선 방향에 대해 <br className="tablet:hidden" />
          고민할 수 있는 것 같습니다.
        </p>
      </div>

      {/* <div className="bg-muted desktop:mt-4 mt-12 flex aspect-video w-full max-w-4xl items-center justify-center rounded-lg">
        <p className="text-muted-foreground">배경 이미지 영역</p>
      </div> */}
    </div>
  );
}
