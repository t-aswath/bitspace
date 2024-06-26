/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.discordapp.net",
				port: "",
				pathname: "/attachments/**",
			},
			{
				protocol: "https",
				hostname: "cdn.discordapp.com",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
		],
		domains: ["github.com", "media.discordapp.net", "cdn.discordapp.com"],
	},
};

export default nextConfig;
