import SettingNav from '../../../components/sidebars/Settings';

export default function SettingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex w-full flex-col h-full relative min-[1140px]:px-9 px-3 ">
			<SettingNav />
			<div className="flex flex-col w-full h-full relative max-container pl-[270px]">{children}</div>
		</div>
	);
}
