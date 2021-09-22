import {QuizList} from '../entitys/QuizList';
import {PlayQuiz} from '../entitys/PlayQuiz';

export class ListEntrys{
  getListEntrys(){
    const list: QuizList[] = [
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 1'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 2'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 3'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 4'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 5'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 6'},
      {linkToEdit: '', linkToQuiz: '', title: 'Quiz 7'}
    ];
    return {list};
  }

  getCategories(){
    const categories = [
      'Category 1',
      'Category 2',
      'Category 3',
      'Category 4'
    ];
    return {categories};
  }

  getQuiz(){
    const quiz: PlayQuiz = {
      title: '',
      currentPoints: 0,
      currentQuestion: {
        text: 'Example of a Question text text text text text?',
        answers: [
          {text: 'Answer 1', isCorrect: undefined, nr: 1},
          {text: 'Answer 2', isCorrect: undefined, nr: 2},
          {text: 'Answer 3', isCorrect: undefined, nr: 3},
        ]
      }
    };

    return {quiz};
  }
}
