export default function Introduction() {
  return (
    <div className="tablet:justify-center container mx-auto flex h-full flex-col items-center justify-evenly px-4 py-12">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h1 className="tablet:text-4xl desktop:text-5xl text-3xl font-bold tracking-tight after:content-['🖐️']">
          안녕하신가요
        </h1>
        <p className="text-muted-foreground tablet:text-2xl text-xl">
          개발자로서
          <br />
          기술이 나온 배경을 이해하고
          <br className="desktop:hidden" />
          <span className="desktop:inline hidden">&nbsp;</span>
          적용하는 것을 중요하게 생각합니다.
        </p>
      </div>

      <div className="bg-muted desktop:mt-4 mt-12 flex aspect-video w-full max-w-4xl items-center justify-center rounded-lg">
        <p className="text-muted-foreground">배경 이미지 영역</p>
      </div>
    </div>
  );
}
