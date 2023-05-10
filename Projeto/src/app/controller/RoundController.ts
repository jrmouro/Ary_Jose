import { Request, Response } from "express";
import { User } from "../user";
import { Data } from "../data";
import { Quiz } from "../quiz";
import { Question } from "../question";
import { UID } from "../uid";
import { Match } from "../match";

class RoundController {

    
    public register_form(req: Request, res: Response) {

        const wsaddress = req.app.get("app_web_server_address");
        const wsport = req.app.get("app_web_server_port");
        const app_name = req.app.get("app_name");

        const user: User = req.app.get("users_session_login").get(req.session.id);

        if (user !== undefined) {

            const match_key: string | undefined = req.query.match_key as string;
            const user_matches: { [key: string]: Math } = req.app.get("app_user_data_map")[user.email].matches;

            if (match_key !== undefined && match_key in user_matches) {

                res.render('round_register_form', {
                    title: app_name,
                    wsa: wsaddress,
                    wsp: wsport,
                    user: user,
                    user_quizzes: user_matches,
                    quiz_key: match_key,
                    fail_msg: undefined
                });

            } else {

                res.redirect('/match_home?fail_msg=invalid match_key');

            }

        } else {

            res.redirect('/user_login_form?fail_msg=login is required');

        }

    }

    public edit_form(req: Request, res: Response) {

        const wsaddress = req.app.get("app_web_server_address");
        const wsport = req.app.get("app_web_server_port");
        const app_name = req.app.get("app_name");

        const user: User = req.app.get("users_session_login").get(req.session.id);

        if (user !== undefined) {

            const match_key: string | undefined = req.query.match_key as string;
            const round_index: string | undefined = req.query.round_index as string;

            if (match_key !== undefined) {

                if (round_index !== undefined) {

                    const user_matches: { [key: string]: Match } = req.app.get("app_user_data_map")[user.email].matches;

                    if (match_key in user_matches) {

                        const edit_match: Match = user_matches[match_key];

                        const index = parseInt(round_index);

                        if(index > -1 && index < edit_match.rounds.length){

                            res.render('question_edit_form', {
                                title: app_name,
                                wsa: wsaddress,
                                wsp: wsport,
                                user: user,
                                user_matches: user_matches,
                                match_key: match_key,
                                round_index: index,
                                fail_msg: undefined
                            });

                        } else {

                            res.redirect('/match_home?fail_msg=invalid round_index');

                        }

                    } else {

                        res.redirect('/match_home?fail_msg=invalid match_key');

                    }

                } else {

                    res.redirect('/match_home?fail_msg=round_index is required');

                }

            } else {

                res.redirect('/match_home?fail_msg=match_key is required');

            }

        } else {

            res.redirect('/user_login_form?fail_msg=login is required');

        }

    }


    public register(req: Request, res: Response) {

        const wsaddress = req.app.get("app_web_server_address");
        const wsport = req.app.get("app_web_server_port");
        const app_name = req.app.get("app_name");

        const user: User = req.app.get("users_session_login").get(req.session.id);

        if (user !== undefined) {

            const match_key: string | undefined = req.query.match_key as string;

            if (match_key !== undefined) {

                const user_matches: { [key: string]: Match } = req.app.get("app_user_data_map")[user.email].matches;

                if (match_key in user_matches) {

                    const description: string | undefined = req.query.description as string;
                    const true_option: string | undefined = req.query.true_option as string;
                    const fake_option1: string | undefined = req.query.fake_option1 as string;

                    if (description !== undefined && true_option !== undefined && fake_option1 !== undefined) {


                        const fake_option2: string | undefined = req.query.fake_option2 as string;
                        const fake_option3: string | undefined = req.query.fake_option3 as string;

                        const fake_options: string[] = [];

                        if (fake_option1 !== undefined && fake_option1 !== "") fake_options.push(fake_option1);
                        if (fake_option2 !== undefined && fake_option2 !== "") fake_options.push(fake_option2);
                        if (fake_option3 !== undefined && fake_option3 !== "") fake_options.push(fake_option3);

                        const question: Question = {
                            key: UID.get(),
                            description: description,
                            fake_options:fake_options,
                            true_option: true_option
                        }

                        // const question: Question = new Question(description, description, fake_options);

                        console.log("USER_QUIZZES");
                        console.log(user_quizzes);

                        console.log("USER_QUIZ");
                        console.log(user_quizzes[quiz_key]);

                        user_quizzes[quiz_key].questions[question.key] = question;

                        Data.writeFileSync<User>(req.app.get("app_user_data_path"), req.app.get("app_user_data_map"));

                        res.redirect('/quiz_edit_form?quiz_key=' + quiz_key);

                    } else {

                        res.redirect('/quiz_home?fail_msg=missing necessary data');

                    }

                } else {

                    res.redirect('/quiz_home?fail_msg=invalid quiz_key');

                }


            } else {

                res.redirect('/quiz_home?fail_msg=quiz_key is required');

            }

        } else {

            res.redirect('/user_login_form?fail_msg=login is required');

        }

    }

    public edit(req: Request, res: Response) {
        const wsaddress = req.app.get("app_web_server_address");
        const wsport = req.app.get("app_web_server_port");
        const app_name = req.app.get("app_name");

        const user: User = req.app.get("users_session_login").get(req.session.id);

        if (user !== undefined) {

            const quiz_key: string | undefined = req.query.quiz_key as string;

            if (quiz_key !== undefined) {

                const question_key: string | undefined = req.query.question_key as string;

                if (question_key !== undefined) {

                    const user_quizzes: { [key: string]: Quiz } = req.app.get("app_user_data_map")[user.email].quizzes;

                    if (quiz_key in user_quizzes) {

                        if (question_key in user_quizzes[quiz_key].questions) {

                            const description: string | undefined = req.query.description as string;
                            const true_option: string | undefined = req.query.true_option as string;
                            const fake_option1: string | undefined = req.query.fake_option1 as string;

                            if (description !== undefined && true_option !== undefined && fake_option1 !== undefined) {

                                console.log("USER_QUIZZES");
                                console.log(user_quizzes);

                                console.log("QUESTION_EDIT");
                                console.log(user_quizzes[quiz_key].questions[question_key]);


                                const fake_option2: string | undefined = req.query.fake_option2 as string;
                                const fake_option3: string | undefined = req.query.fake_option3 as string;

                                const fake_options: string[] = [];

                                if (fake_option1 !== undefined && fake_option1 !== "") fake_options.push(fake_option1);
                                if (fake_option2 !== undefined && fake_option2 !== "") fake_options.push(fake_option2);
                                if (fake_option3 !== undefined && fake_option3 !== "") fake_options.push(fake_option3);

                                user_quizzes[quiz_key].questions[question_key].description = description;
                                user_quizzes[quiz_key].questions[question_key].true_option = true_option;
                                user_quizzes[quiz_key].questions[question_key].fake_options = fake_options;


                                console.log("QUESTION_EDIT AFTER");
                                console.log(user_quizzes[quiz_key].questions[question_key]);

                                Data.writeFileSync<User>(req.app.get("app_user_data_path"), req.app.get("app_user_data_map"));

                                res.redirect('/question_edit_form?quiz_key=' + quiz_key + "&question_key=" + question_key);

                            } else {

                                res.redirect('/quiz_home?fail_msg=missing necessary data');

                            }

                        } else {

                            res.redirect('/quiz_home?fail_msg=invalid question_key');

                        }

                    } else {

                        res.redirect('/quiz_home?fail_msg=invalid quiz_key');

                    }

                } else {

                    res.redirect('/quiz_home?fail_msg=question_key is required');

                }


            } else {

                res.redirect('/quiz_home?fail_msg=quiz_key is required');

            }

        } else {

            res.redirect('/user_login_form?fail_msg=login is required');

        }

    }

}

export const questionController = new RoundController();