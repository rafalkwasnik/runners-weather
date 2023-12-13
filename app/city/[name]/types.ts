export type CityPageProps = {
  params: { name: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};