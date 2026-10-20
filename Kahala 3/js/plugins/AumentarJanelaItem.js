/*:
 * @target MZ
 * @plugindesc Aumenta a quantidade de linhas visíveis na janela Selecionar Item.
 * @author Seu Nome
 *
 * @param numRows
 * @text Número de Linhas
 * @type number
 * @min 1
 * @max 10
 * @default 6
 *
 * @help Este plugin altera quantas linhas a janela "Selecionar Item" exibe.
 */

(() => {
    Window_EventItem.prototype.numVisibleRows = function() {
        return 19; // Altere este número para a quantidade de linhas que desejar
    };
})();