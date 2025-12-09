import {
	BookOpen,
	CameraOff,
	Film,
	Globe,
	HelpCircle,
	House,
	SquareCheckBig,
	UserPlus,
	Users,
} from "lucide-react";

const allowedIcons = {
	Users,
	UserPlus,
	SquareCheckBig,
	Globe,
	House,
	CameraOff,
	BookOpen,
	Film,
	HelpCircle,
};

const DynamicIcon = ({ iconName }: { iconName: string }) => {
	const IconComponent =
		allowedIcons[iconName as keyof typeof allowedIcons] ?? HelpCircle;

	return <IconComponent className="h-7 w-7" />;
};

export default DynamicIcon;
