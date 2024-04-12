import testContainer from "../config/testContainer";

describe('UserService', () => {
    it('should return all users', async () => {
        const container = testContainer;
        const userService = container.resolve('userService');

        expect(await userService.getUsersService()).toEqual(
            [
                {
                    id: "7de58e07-0836-4070-9838-622497363578",
                    name: "Joe Bloggs",
                    teamId: "2fb7e618-b075-4451-a30e-a95b1b643f2f"
                }
            ]
        );
    });
});