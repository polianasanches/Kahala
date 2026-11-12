/*:
 * @target MZ
 * @plugindesc Suporte a WASD compatível com VisuStella MZ.
 * @author Seu Nome
 * @help Adiciona W, A, S, D respeitando o Core da VisuStella.
 */

var Imported = Imported || {};
scriptAlias = function() {
    Input.keyMapper[87] = 'up';
    Input.keyMapper[65] = 'left';
    Input.keyMapper[83] = 'down';
    Input.keyMapper[68] = 'right';
};

const _Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    _Scene_Boot_start.call(this);
    scriptAlias();
};