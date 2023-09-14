export type StatViewProp = {
  statNo: number;
  statDesc: string;
};
const StatView = ({ statNo, statDesc }: StatViewProp) => {
  return (
    <div className="space-y-6 w-[100%]">
        <div className="ml-8">
      <p className="text-6xl font-bold text-white">{statNo}+</p>
        </div>
      <p className="text-md font-medium text-white">{statDesc}</p>
    </div>
  );
};
export default StatView;
