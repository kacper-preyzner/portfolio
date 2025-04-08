export type Message = {
	id: Number;
	name: String;
	email: String;
	topic: String;
	message: String;
	createdAt: String;
};

export type Admin = {
	id: Number;
	name: String;
	email: String;
	login: String;
	createdAt: String;
};

export type LoginResponse = {
	accessToken: String;
	admin: Admin;
};
