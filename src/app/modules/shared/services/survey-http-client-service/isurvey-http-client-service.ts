import { Observable } from "rxjs/internal/Observable";
import { ISurvey } from "src/app/models/isurvey";

export interface ISurveyHttpClientService{
    getSurveysHttp(url: string): Observable<ISurvey[]>;
}